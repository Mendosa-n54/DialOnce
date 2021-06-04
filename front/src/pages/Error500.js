// Modules
import React, { useContext } from 'react'

// Files
import Context from '../store/context/'

// Material-ui
import Typography from '@material-ui/core/Typography'


const stylePageError = {
	padding: '50px 0',
}


const Error500 = () => {
	const { color } = useContext(Context)

	return (
		<div style={ stylePageError }>
			<Typography variant="h1" color={ color.color }>
				Erreur 500<br/>
				INTERNAL SERVER ERROR
			</Typography>
		</div>
	)
}

export default Error500
