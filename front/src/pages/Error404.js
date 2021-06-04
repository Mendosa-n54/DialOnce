// Modules
import React, { useContext } from 'react'

// Files
import Context from '../store/context/'

// Material-ui
import Typography from '@material-ui/core/Typography'


const stylePageError = {
	padding: '50px 0',
}


const Error404 = () => {
	const { color } = useContext(Context)

	return (
		<div style={ stylePageError }>
			<Typography variant="h1" color={ color.color }>
				Erreur 404<br/>
				PAGE NOT FOUND
			</Typography>
		</div>
	)
}

export default Error404
