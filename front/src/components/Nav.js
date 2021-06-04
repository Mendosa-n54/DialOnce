// Modules
import React from 'react'
import { Link } from 'react-router-dom'
// import styled from 'styled-components'

// Files
import Routes from '../routes'


// const Li = styled.li`
// 	text-decoration: none;
// 	list-style: none;
// `
const styleRoutes = {
	maxWidth: 1108,
	margin: 'auto',
	padding: 15,
	border: '1px solid #eee',
	backgroundColor: '#fff',
}
const styleNav = {
	margin: 20,
}


const Nav = () => {
	return (
		<main>
			<nav>
				<ul style={ styleNav }>
					<li><Link to="/" className='link'>Accueil</Link></li>
					<li><Link to="/list-urls" className='link'>Toutes les URLs</Link></li>
				</ul>
			</nav>
			<div className='content' style={ styleRoutes }>
				{ Routes }
			</div>
		</main>
	)
}

export default Nav
