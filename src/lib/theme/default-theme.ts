import { colorDark } from '$lib/colors/dapper-ui';
import {
	colorTailwindAmber,
	colorTailwindBlue,
	colorTailwindCyan,
	colorTailwindEmerald,
	colorTailwindFuchsia,
	colorTailwindGray,
	colorTailwindGreen,
	colorTailwindIndigo,
	colorTailwindLime,
	colorTailwindNeutral,
	colorTailwindOrange,
	colorTailwindPink,
	colorTailwindPurple,
	colorTailwindRed,
	colorTailwindRose,
	colorTailwindSky,
	colorTailwindSlate,
	colorTailwindStone,
	colorTailwindTeal,
	colorTailwindViolet,
	colorTailwindYellow,
	colorTailwindZinc
} from '$lib/colors/tailwind';
import type { DapperUiTheme } from './DapperUiTheme';

export const defaultDapperUiTheme: DapperUiTheme = {
	colors: {
		primary: colorTailwindBlue,
		neutral: colorTailwindGray,
		dark: colorDark,
		// Custom colors
		slate: colorTailwindSlate,
		gray: colorTailwindGray,
		zinc: colorTailwindZinc,
		'neutral-gray': colorTailwindNeutral,
		stone: colorTailwindStone,
		red: colorTailwindRed,
		orange: colorTailwindOrange,
		amber: colorTailwindAmber,
		yellow: colorTailwindYellow,
		lime: colorTailwindLime,
		green: colorTailwindGreen,
		emerald: colorTailwindEmerald,
		teal: colorTailwindTeal,
		cyan: colorTailwindCyan,
		sky: colorTailwindSky,
		blue: colorTailwindBlue,
		indigo: colorTailwindIndigo,
		violet: colorTailwindViolet,
		purple: colorTailwindPurple,
		fuchsia: colorTailwindFuchsia,
		pink: colorTailwindPink,
		rose: colorTailwindRose
	},
	radiuses: {
		button: 'base',
		input: 'base',
		checkbox: 'base',
		slider: {
			thumb: 'full',
			track: 'full'
		}
	},
	font: {
		default: "'Open Sans', sans-serif",
		code: "'Fira Mono', monospace"
	}
};
