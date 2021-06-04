// Modules
import React, { useContext, useState, useEffect } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

// Files
import Context from '../store/context'
import themeUI from './material-ui-theme.config'

// Material-ui
import useMediaQuery from '@material-ui/core/useMediaQuery'


const MaterialUiTheme = (props) => {
	const { theme } = useContext(Context)
	const { setBreakpoint } = useContext(Context)

	const [themeLocal, setThemeLocal] = useState(0)

	let themeMaterialUI = createMuiTheme(themeUI[themeLocal])

	const upXl = useMediaQuery(themeMaterialUI.breakpoints.up('xl'))
	const betweenLgXl = useMediaQuery(themeMaterialUI.breakpoints.between('lg', 'xl'))
	const betweenMdLg = useMediaQuery(themeMaterialUI.breakpoints.between('md', 'lg'))
	const betweenSmMd = useMediaQuery(themeMaterialUI.breakpoints.between('sm', 'md'))
	const downSm = useMediaQuery(themeMaterialUI.breakpoints.down('sm'))

	useEffect(() => {
		if (themeLocal != theme.theme) {
			setThemeLocal(theme.theme)
			themeMaterialUI = createMuiTheme(themeUI[themeLocal])
		}
	}, [theme])

	useEffect(() => {
		/* Media queries breakpoints :
		- xs: 0, // Extra small devices (portrait phones, less than 576px). No media query for 'xs' since this is the default value
		- sm: 576, // Small devices (landscape phones, 576px and up)
		- md: 768, // Medium devices (tablets, 768px and up)
		- lg: 992, // Large devices (desktops, 992px and up)
		- xl: 1200, // Extra large devices (large desktops, 1200px and up)

		useMediaQuery rules :
		- theme.breakpoints.up(key)
		- theme.breakpoints.down(key)
		- theme.breakpoints.only(key)
		- theme.breakpoints.between(start, end) */

		if (upXl) {
			setBreakpoint( { breakpoint: 'xl', type: 'MEDIA_QUERY' } )
		} else if (betweenLgXl) {
			setBreakpoint( { breakpoint: 'lg', type: 'MEDIA_QUERY' } )
		} else if (betweenMdLg) {
			setBreakpoint( { breakpoint: 'md', type: 'MEDIA_QUERY' } )
		} else if (betweenSmMd) {
			setBreakpoint( { breakpoint: 'sm', type: 'MEDIA_QUERY' } )
		} else {
			setBreakpoint( { breakpoint: 'xs', type: 'MEDIA_QUERY' } )
		}
	}, [upXl, betweenLgXl, betweenMdLg, betweenSmMd, downSm])

	return (
		<MuiThemeProvider theme={ themeMaterialUI }>
			{ props.children }
		</MuiThemeProvider>
	)
}

export default MaterialUiTheme
