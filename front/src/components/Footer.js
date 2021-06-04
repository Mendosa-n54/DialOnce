// Modules
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

// Files
import Context from '../store/context'

// Components
import LogoDialOnce from './LogoDialOnce'

// Material-ui
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'


const styles = {
	// button: {
	// 	width: '40%',
	// 	borderRadius: 30,
	// },
}

const styleFooter = {
	flexGrow: 1,
	justifyContent: 'space-evenly',
	alignItems: 'center',
	width: '100%',
	marginTop: 30,
	backgroundColor: '#340f38',
	color: '#fff',
	textAlign: 'center',
}
const styleFooterItem = {
	margin: '20px auto',
}
const styleFooterItemSecond = {
	marginBottom: 20,
}
const styleFooterImg = {
	maxWidth: '80%',
	margin: 'auto',
}


const Footer = () => {
	const { theme, setTheme } = useContext(Context)
	const { color, setColor } = useContext(Context)

	function changeGlobalTheme(num) {
		if (theme.theme !== num) {
			setTheme( { theme: num, type: 'CHANGE_THEME' } )
		}
	}
	function changeGlobalColor() {
		if (color.color == 'primary') {
			setColor( { color: 'secondary', type: 'CHANGE_COLOR' } )
		} else if (color.color == 'secondary') {
			setColor( { color: 'primary', type: 'CHANGE_COLOR' } )
		}
	}

	return (
		<footer style={ styleFooter }>
			<Grid container>
				<Grid item xs={12} sm={12} md={12} lg={3} xl={3} style={ styleFooterItem }>
					<div style={ styleFooterItemSecond, styleFooterImg }>
						<LogoDialOnce></LogoDialOnce>
					</div>
				</Grid>

				<Grid item xs={12} sm={12} md={12} lg={3} xl={3} style={ styleFooterItem }>
					<ul style={ styleFooterItemSecond }>
						<Typography variant="body1" className='h4' style={ styleFooterItemSecond }>Pratique</Typography>
						<li><Link to='/' className='link'>Accueil</Link></li>
						<li><Link to='/' className='link'>Actualités</Link></li>
						<li><Link to='/' className='link'>Contacter un expert</Link></li>
					</ul>
				</Grid>

				<Grid item xs={12} sm={12} md={12} lg={3} xl={3} style={ styleFooterItem }>
					<ul style={ styleFooterItemSecond }>
						<Typography variant="body1" className='h4' style={ styleFooterItemSecond }>Aide</Typography>
						<li><Link to='/' className='link'>Politique de confidentialité</Link></li>
						<li><Link to='/' className='link'>Mentions légales</Link></li>
						<li><Link to='/' className='link'>Politiques d’utilisation des cookies</Link></li>
					</ul>
				</Grid>

				<Grid item xs={12} sm={12} md={12} lg={3} xl={3} style={ styleFooterItem }>
					<div style={ styleFooterItemSecond }>
						<Typography variant="body1" className='h4'>Personnalisez le site</Typography>
						{ theme.theme == 0 ? (
							<Button variant='outlined' className='italic' disabled onClick={ () => changeGlobalTheme(0) }>Theme 1</Button>
						) : (
							<Button variant='outlined' color={ color.color } onClick={ () => changeGlobalTheme(0) }>Theme 1</Button>
						)}
						{ theme.theme == 1 ? (
							<Button variant='outlined' className='italic' disabled onClick={ () => changeGlobalTheme(1) }>Theme 2</Button>
						) : (
							<Button variant='outlined' color={ color.color } onClick={ () => changeGlobalTheme(1) }>Theme 2</Button>
						)}
						<br/>
						<Button variant='outlined' color={ color.color } onClick={ () => changeGlobalColor() }>Change color</Button>
					</div>
				</Grid>
			</Grid>
		</footer>
	)
}

export default withStyles(styles)(Footer)
