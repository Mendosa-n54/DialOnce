// Modules
import React, { useContext } from 'react'
// import { Link } from 'react-router-dom'

// Files
import Context from '../store/context'

// Components
import LogoDialOnce from './LogoDialOnce'

// Material-ui
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'


const styleHeader = {
	display: 'flex',
	justifyContent: 'space-around',
	padding: 10,
	textAlign: 'center'
}
const styleItem = {
	margin: 'auto auto 10px auto',
}


const Header = () => {
	const { color } = useContext(Context)

	return (
		<header style={ styleHeader }>
			<Grid container>
				<Grid item xs={3} sm={3} md={3} lg={3} xl={3} style={ styleItem }>
					<LogoDialOnce></LogoDialOnce>
				</Grid>
				<Grid item xs={9} sm={9} md={9} lg={9} xl={9} color={ color.color } style={ styleItem }>
					<Typography variant="h1" className='h1'>DialOnce - test</Typography>
				</Grid>
			</Grid>
		</header>
	)
}

export default Header
