// Files CSS
import '../assets/stylesheets/base/normalize.scss'
import '../assets/stylesheets/global.scss'

// Material-ui
// import deepOrange from '@material-ui/core/colors/deepOrange'
// import brown from '@material-ui/core/colors/brown'
import indigo from '@material-ui/core/colors/indigo'
import blueGrey from '@material-ui/core/colors/blueGrey'

const theme1 = {
	breakpoints: {
		values: {
			xs: 0, // Extra small devices (portrait phones, less than 576px). No media query for 'xs' since this is the default value
			sm: 576, // Small devices (landscape phones, 576px and up)
			md: 768, // Medium devices (tablets, 768px and up)
			lg: 992, // Large devices (desktops, 992px and up)
			xl: 1200, // Extra large devices (large desktops, 1200px and up)
		},
	},
	palette: {
		primary: {
			// main: deepOrange[600],
			// light: deepOrange[300],
			// dark: deepOrange[900],
			main: '#f3985d',
			light: '#eb8989',
			dark: '#a52020',
		},
		secondary: {
			// main: brown[600],
			// light: brown[300],
			// dark: brown[900],
			main: '#ffd700',
			light: '#b0b0b0',
			dark: '#404040',
		},
		type: 'light',
		action: {
			disabled: 'grey'
		}
	},
	typography: {
		useNextVariants: true,
		fontFamily: '\'Roboto\'',
		h1: {
			padding: '10px 0',
			fontSize: 'calc(25px + 0.3vw)', // fontSize: 30, // fontSize: '1.875em',
			textAlign: 'center',
		},
		h2: {
			padding: '10px 0',
			fontSize: 'calc(20px + 0.3vw)', // fontSize: 25, // fontSize: '1.5625em',
			textAlign: 'center',
		},
		h3: {
			padding: '5px 0',
			fontSize: 'calc(17px + 0.3vw)', // fontSize: 22, // fontSize: '1.375em',
			textAlign: 'center',
		},
		h4: {
			padding: '10px 0',
			fontSize: 'calc(15px + 0.3vw)', // fontSize: 20, // fontSize: '1.25em',
			textAlign: 'center',
		},
		h5: {
			padding: '5px 0',
			fontSize: 'calc(13px + 0.3vw)', // fontSize: 18, // fontSize: '1.125em',
		},
		h6: {
			padding: '5px 0',
			fontSize: 'calc(12px + 0.3vw)', // fontSize: 15, // fontSize: '0.9375em',
		},
		body1: {
			fontSize: 'calc(11px + 0.3vw)', // fontSize: 14, // fontSize: '0.875em',
		},
		body2: {
			fontSize: 'calc(11px + 0.3vw)', // fontSize: 14, // fontSize: '0.875em',
			color: '#707070',
		},
		subtitle1: {
			padding: 10,
			fontSize: 'calc(11px + 0.3vw)', // fontSize: 14, // fontSize: '0.875em',
			fontStyle: 'italic',
		},
	},
	overrides: {
		MuiTypography: {
			root: {
				// color: '#3e3e3e',
			},
		},
		MuiContainer: {
			root: {
				padding: '0 !important',
			},
		},
		MuiCardContent: {
			root: {
				margin: 0,
				padding: '10px !important',
				// backgroundColor: '#EFEFEF',
			},
		},
		MuiButton: {
			root: {
				minWidth: 100,
				height: 40,
				// margin: '15px 8px 15px 0',
				margin: 15,
				padding: '0 20px',
				borderRadius: 3,
			},
		},
		MuiInput: {
			formControl: {
				marginBottom: 0,
			}
		},
		MuiInputLabel: {
			root: {
				// marginBottom: 5,
				// paddingLeft: 10,
			}
		},
		MuiTextField: {
			root: {
				width: '100%',
			},
		},
		MuiNativeSelect: {
			root: {
				padding: 15,
				border: '1px solid #ced4da',
			},
		},
		MuiCheckbox: {
			root: {
				padding: 8,
			},
		},
		MuiFormControl: {
			root: {
				width: '100%',
			}
		},
		MuiBreadcrumbs: {
			separator: {
				marginRight: 4,
				marginLeft: 4,
			}
		}
	}
}

const theme2 = {
	breakpoints: {
		values: {
			xs: 0, // Extra small devices (portrait phones, less than 576px). No media query for 'xs' since this is the default value
			sm: 576, // Small devices (landscape phones, 576px and up)
			md: 768, // Medium devices (tablets, 768px and up)
			lg: 992, // Large devices (desktops, 992px and up)
			xl: 1200, // Extra large devices (large desktops, 1200px and up)
		},
	},
	palette: {
		primary: {
			main: indigo[700],
			light: indigo[300],
			dark: indigo[900],
		},
		secondary: {
			main: blueGrey[700],
			light: blueGrey[300],
			dark: blueGrey[900],
		},
		type: 'dark',
	},
	typography: {
		useNextVariants: true,
		fontFamily: '\'Roboto\'',
		h1: {
			fontSize: 50,
			padding: '30px 0',
			textAlign: 'center',
		},
		h2: {
			fontSize: 40,
			padding: '20px 0',
			textAlign: 'center',
		},
		h3: {
			fontSize: 30,
			padding: '20px 0',
			textAlign: 'center',
		},
		h4: {
			fontSize: 20,
			padding: '15px 0',
			textAlign: 'center',
		},
		h5: {
			fontSize: 20,
			padding: '15px 0',
		},
		body1: {
			color: 'grey',
		},
		body2: {
			color: 'grey',
		},
		subtitle1: {
			padding: '10px',
			fontStyle: 'italic',
		},
	},
	overrides: {
		MuiTypography: {
			root: {
				// color: '#3e3e3e',
			},
		},
		MuiContainer: {
			root: {
				padding: '0 !important',
			},
		},
		MuiCardContent: {
			root: {
				margin: 0,
				padding: '10px !important',
				// backgroundColor: '#EFEFEF',
			},
		},
		MuiButton: {
			root: {
				minWidth: 100,
				height: 40,
				// margin: '15px 8px 15px 0',
				margin: 15,
				padding: '0 20px',
				borderRadius: 3,
			},
		},
		MuiInput: {
			formControl: {
				marginBottom: 0,
			}
		},
		MuiInputLabel: {
			root: {
				// marginBottom: 5,
				// paddingLeft: 10,
			}
		},
		MuiTextField: {
			root: {
				width: '100%',
			},
		},
		MuiNativeSelect: {
			root: {
				padding: 15,
				border: '1px solid #ced4da',
			},
		},
		MuiCheckbox: {
			root: {
				padding: 8,
			},
		},
		MuiFormControl: {
			root: {
				width: '100%',
			}
		},
		MuiBreadcrumbs: {
			separator: {
				marginRight: 4,
				marginLeft: 4,
			}
		}
	}
}

// Switch themes
const themeUI = [theme1, theme2]

export default themeUI
