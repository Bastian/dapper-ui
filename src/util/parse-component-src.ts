import { parse } from '@typescript-eslint/typescript-estree';
import type { TSESTree } from '@typescript-eslint/typescript-estree';

export interface ParsedComponentProp {
	comment?: string;
	name?: string;
	type?: string;
	defaultValue?: string;
}

/**
 * Takes the full code of a Svelte component as input and returns a an array of
 *  all exported variables with their name, type, default value and comment.
 */
export function parseSvelteComponent(src: string): {
	props?: ParsedComponentProp[];
} {
	return {
		props: parseComponentProps(src)
	};
}

function parseComponentProps(src: string): ParsedComponentProp[] | undefined {
	const typescriptRegex = /<script lang="ts">((.|\s)*?)<\/script>/gm;

	const typeScriptCode = typescriptRegex.exec(src)?.[1];

	if (!typeScriptCode) {
		return undefined;
	}

	const ast = parse(typeScriptCode, {
		comment: true,
		loc: false,
		range: true
	});

	function isDefined<T>(val: T | undefined | null): val is T {
		return val !== undefined && val !== null;
	}

	const response = ast.body
		.filter(
			(node): node is TSESTree.ExportNamedDeclaration => node.type === 'ExportNamedDeclaration'
		)
		.map((node) => parseExportNamedDeclaration(ast, typeScriptCode, node))
		.filter(isDefined);

	return response;
}

function parseExportNamedDeclaration(
	ast: TSESTree.Program,
	fullCode: string,
	declaration: TSESTree.ExportNamedDeclaration
) {
	const response: {
		comment?: string;
		name?: string;
		type?: string;
		defaultValue?: string;
	} = {};

	if (
		declaration.type !== 'ExportNamedDeclaration' ||
		declaration.declaration?.type !== 'VariableDeclaration' ||
		declaration.declaration?.declarations?.length <= 0 ||
		declaration.declaration?.declarations[0].type !== 'VariableDeclarator' ||
		declaration.declaration?.declarations[0].id?.type !== 'Identifier'
	) {
		return undefined;
	}

	response.name = declaration.declaration.declarations[0].id.name;

	const comment = getClosestComment(ast, declaration)?.value;
	if (comment) {
		response.comment = comment.replace(/^\s*\* ?/gm, '').trim();
	}

	const type = declaration.declaration.declarations[0].id.typeAnnotation;

	const defaultValue = declaration.declaration.declarations[0].init;
	if (defaultValue) {
		response.defaultValue = fullCode.substring(defaultValue.range[0], defaultValue.range[1]);
	}

	response.type = type ? parseType(type) : undefined;

	return response;
}

function parseTypeNode(node: TSESTree.TypeNode): string {
	if (node.type === 'TSUnionType') {
		return node.types.map(parseTypeNode).join(' | ');
	}
	if (node.type === 'TSStringKeyword') {
		return 'string';
	}
	if (node.type === 'TSUndefinedKeyword') {
		return 'undefined';
	}
	if (node.type === 'TSNullKeyword') {
		return 'null';
	}
	if (node.type === 'TSNumberKeyword') {
		return 'number';
	}
	if (node.type === 'TSBooleanKeyword') {
		return 'boolean';
	}
	if (node.type === 'TSNeverKeyword') {
		return 'never';
	}
	if (node.type === 'TSTypeReference') {
		if (node.typeName.type === 'Identifier') {
			return node.typeName.name;
		}
		return '???';
	}
	if (node.type === 'TSTupleType') {
		return `[${node.elementTypes.map(parseTypeNode).join(', ')}]`;
	}
	if (node.type === 'TSLiteralType') {
		const literal = node.literal;
		if (literal.type === 'Literal') {
			return literal.raw;
		}
		return '???';
	}
	if (node.type === 'TSTypeLiteral') {
		return `{ ${node.members.map(parseTypeElement).join('; ')} }`;
	}
	return '???';
}

function parseTypeElement(node: TSESTree.TypeElement): string {
	if (node.type === 'TSPropertySignature') {
		const name = node.key.type === 'Identifier' ? node.key.name : '???';
		const type = node.typeAnnotation?.typeAnnotation
			? parseTypeNode(node.typeAnnotation.typeAnnotation)
			: '???';
		return `${name}: ${type}`;
	}

	return '???';
}

function parseType(typeAnnotation: TSESTree.TSTypeAnnotation) {
	return parseTypeNode(typeAnnotation.typeAnnotation);
}

function getClosestComment(ast: TSESTree.Program, node: TSESTree.Node) {
	if (!ast.comments) {
		return undefined;
	}

	const comments = ast.comments.filter((c) => c.range[0] < node.range[0]);
	if (comments.length === 0) {
		return undefined;
	}

	return comments[comments.length - 1];
}
