import { remCalc } from 'utilities';

export interface Colors {
  primary: string;
  secondary: string;
  alert: string;
  success: string;
  warning: string;
  white: string;
  black: string;
}

export interface Theme {
  palette: Object;
  typography: Object;
  overrides: Object;
  shape: Object;
}

export const colors: Colors = {
	primary: '#1963b0',
	secondary: '#CED4DB',
	alert: '#E33A4F',
	success: '#17C122',
	warning: '#FFB843',
	white: '#fff',
  black: '#121212',
};

export const theme: Theme = {
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
		fontFamily: "'PT Sans', sans-serif"
	},
	shape: {
		borderRadius: remCalc(3),
	},
	overrides: {
	
	},
};