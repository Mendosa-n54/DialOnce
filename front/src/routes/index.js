// Modules
import React, { useEffect } from 'react'
import { Route, Switch, useParams } from 'react-router-dom'

// Files
import * as apiUrl from '../store/modules/url'

// Pages
// /* Publics */
import Home from '../pages/Home'
import ListUrls from '../pages/ListUrls'

/* Errors */
import Error500 from '../pages/Error500'

/* Default */
import Error404 from '../pages/Error404'

// Material-ui
import Typography from '@material-ui/core/Typography'

const Routes = (
	<div>
		<Switch>
			<Route exact path='/' component={ Home }></Route>
			<Route path='/list-urls' component={ ListUrls }></Route>
			<Route path="/url/:shortUrl" component={ Redirect } />

			<Route path='/error-500' component={ Error500 }></Route>

			<Route component={ Error404 }></Route>
		</Switch>
	</div>
)

function Redirect() {
	const { shortUrl } = useParams()

	useEffect(() => {
		let mounted = true
		apiUrl.getUrl({ shortUrl: shortUrl })
			.then((response) => {
				if (mounted) {
					if (response.data.length > 0) {
						document.location.href = response.data[0].fullUrl
						return null
					} else {
						const url = (typeof window === 'object' || typeof window !== 'undefined') ? window.location.href : ''
						const matches = url.match(/^https?:\/\/([^/?#]+)(?:[/?#]|$)/i)
						let domain = matches && matches[1]
						domain = url.includes('https://') ? 'https://' + domain : 'http://' + domain
						document.location.href = domain + '/error-401'
						return null
					}
				}
			})
			.catch((err) => console.error(err))

		return function cleanup() {
			mounted = false
		}
	}, [])

	return (
		<Typography variant="body2" className='loader'>Loading ...</Typography>
	)
}

export default Routes
