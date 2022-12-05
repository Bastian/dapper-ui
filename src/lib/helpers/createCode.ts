export function createCode(options: {
	name: string;
	children?: string | (string | undefined)[];
	props?: {
		[key: string]: string | boolean | undefined;
	};
	compact?: boolean;
}) {
	return `<${options.name} ${Object.entries(options?.props ?? {})
		.map(([key, value]) => {
			if (value === undefined) return '';
			if (typeof value === 'boolean') return value ? key : '';
			return `${key}="${value}"`;
		})
		.filter(Boolean)
		.join(' ')}${options.children ? `>${renderChildren(options.children, options.compact)}${options.compact ? '' : '\n'}</${options.name}>` : '/>'}`;
}

function renderChildren(children: string | (string | undefined)[], compact = false) {
	let rendered = Array.isArray(children) ? children.filter(i => i !== undefined).join(compact ? '' : '\n') : children;
	if (!compact) {
		rendered = `\n${rendered}`;
	}
	return rendered.replace(new RegExp("\\n", 'g'), "\n    ");
}