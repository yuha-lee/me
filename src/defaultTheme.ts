import { createTheme } from '@material-ui/core';

const basicTypography = {
	h1: {
		fontSize: 90,
		fontFamily: '"Comfortaa", sans-serif',
		letterSpacing: '-0.14px',
		color: '#000000DE'
	},
	h2: {
		fontSize: 60,
		fontFamily: '"Comfortaa", sans-serif',
		letterSpacing: '-0.03px',
		color: '#000000DE'
	},
	h3: {
		fontSize: 48,
		fontFamily: '"Comfortaa", sans-serif',
		letterSpacing: '0px',
		color: '#6B92E5'
	},
	h4: {
		fontSize: 32,
		fontFamily: '"Comfortaa", sans-serif',
		letterSpacing: '0.01px',
		color: '#6B92E5'
	},
	h5: {
		fontSize: 24,
		fontFamily: '"Comfortaa", sans-serif',
		letterSpacing: '0.77px',
		color: '#6B92E5'
	},
	h6: {
		fontSize: 20,
		fontFamily: '"Comfortaa", sans-serif',
		letterSpacing: '0px',
		color: '#6B92E5'
	},
	subtitle1: {
		fontSize: 16,
		fontFamily: '"Comfortaa", sans-serif',
		letterSpacing: '0px',
		color: '#6B92E5'
	},
	subtitle2: {
		fontSize: 14,
		fontFamily: '"Comfortaa", sans-serif',
		letterSpacing: '0px',
		color: '#6B92E5'
	},
	body1: {
		fontSize: 16,
		fontFamily: '"Comfortaa", sans-serif',
		letterSpacing: '0px',
		color: '#dcdcdc'
	},
	body2: {
		fontSize: 14,
		fontFamily: '"Comfortaa", sans-serif',
		letterSpacing: '0px',
		color: '#000000DE'
	},
	button: {
		fontSize: 13,
		fontFamily: '"Comfortaa", sans-serif',
		letterSpacing: '0.01px',
		color: '#000000DE'
	},
	caption: {
		fontSize: 12,
		fontFamily: '"Comfortaa", sans-serif',
		letterSpacing: '0px',
		color: '#000000DE'
	},
	overline: {
		fontSize: 12,
		fontFamily: '"Comfortaa", sans-serif',
		letterSpacing: '0.16px',
		color: '#000000DE'
	}
};

const basicPalette = {
	primary: {
		light: '#6B92E5',
		main: '#6B92E5',
		dark: '#7B81BE',
		contrastText: '#FFFFFF'
	},
	secondary: {
		light: '#FF4081',
		main: '#F88AB0',
		dark: '#C51162',
		contrastText: '#FFFFFF'
	},
	error: {
		light: '#E57373',
		main: '#F44336',
		dark: '#D32F2F',
		contrastText: '#FFFFFF'
	},
	warning: {
		light: '#FFB74D',
		main: '#FF9800',
		dark: '#F57C00',
		contrastText: '#000000DE'
	},
	info: {
		light: '#64B5F6',
		main: '#2196F3',
		dark: '#1976D2',
		contrastText: '#FFFFFF'
	},
	success: {
		light: '#81C784',
		main: '#4CAF50',
		dark: '#388E3C',
		contrastText: '#000000DE'
	},
	grey: {
		'50': '#FAFAFA',
		'100': '#F5F5F5',
		'200': '#EEEEEE',
		'300': '#E0E0E0',
		'400': '#BDBDBD',
		'500': '#9E9E9E',
		'600': '#757575',
		'700': '#616161',
		'800': '#424242',
		'900': '#212121',
		'A100': '#D5D5D5',
		'A200': '#AAAAAA',
		'A400': '#575757',
		'A700': '#303030'
	},
	text: {
		primary: '#6B92E5',
		secondary: '#ff1493',
		disabled: '#00000061',
		hint: '#00000061'
	}
};

export default createTheme({
	overrides: {
		MuiCssBaseline: {
			'@global': {
				body: {
					minHeight: '100vh',
					backgroundColor: '#ebeff2'
				},
			},
		},
	},
	palette: basicPalette,
	typography: basicTypography
});;