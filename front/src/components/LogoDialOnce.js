// Modules
import React from 'react'

// Files
import logoDialOnce from '../assets/images/dialonce-logo.png'


const styleLogo = {
	maxWidth: 100,
}

const LogoDialOnce = () => {
	return (
		<a href='https://www.dial-once.com/' rel='noopener noreferrer' className='link'><img src={ logoDialOnce } alt='Logo DialOnce' style={ styleLogo }></img></a>
	)
}

export default LogoDialOnce
