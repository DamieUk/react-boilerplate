import { remCalc } from 'utils';

export const colors = {
	primary: '#1963b0',
	secondary: '#CED4DB',
	alert: '#E33A4F',
	success: '#17C122',
	warning: '#FFB843',
	white: '#fff',
};

export const theme = {
	palette: {
		primary: {
			main: colors.primary,
		},
		secondary: {
			main: colors.secondary,
		},
		error: {
			main: colors.alert,
		},
		contrastThreshold: 3,
		tonalOffset: 0.08,
	},
	typography: {
		// Use the system font instead of the default Roboto font.
		fontFamily: [
			'-apple-system',
			'CircularStd-Medium',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
		].join(','),
	},
	shape: {
		borderRadius: remCalc(3),
	},
	overrides: {
	
	},
};