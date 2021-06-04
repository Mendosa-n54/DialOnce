// Modules
import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// Files
import Context from '../store/context/'
import * as apiUrl from '../store/modules/url'

// Material-ui
import Typography from '@material-ui/core/Typography'

const ListUrls = () => {
	const { breakpoint } = useContext(Context)
	const { url } = useContext(Context)

	const [urls, setUrls] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		let mounted = true
		apiUrl.getAllUrls()
			.then((response) => {
				if (mounted) {
					if (response.data.length > 0) {
						setUrls(response.data)
						setIsLoading(false)
					} else {
						setUrls([])
						setIsLoading(false)
					}
				}
			})
			.catch((err) => console.error(err))

		return function cleanup() {
			mounted = false
		}
	}, [])

	return (
		<div className='flex'>
			<div className='flex-1'>
				<Typography variant="h2" className='h4'>Toutes vos urls</Typography>
				{ isLoading == true ? (
					<Typography variant="body2" className='loader'>Loading ...</Typography>
				) : urls.length > 0 ? (
					<ul>
						{ urls.map((u, i) => {
							return (
								<li key={ i }><Link to={ '/url/'+u.shortUrl } target="_blank" rel="noopener noreferrer">{ u.shortUrl }</Link> ({ u.fullUrl })</li>
							)
						})}
					</ul>
				) : (
					<Typography variant="body2" className='loader'>{'Pas d\'url ...'}</Typography>
				)}
			</div>

			{/* Colonne de doite (pubs et autres) : version desktop */}
			{ (breakpoint.breakpoint == 'md' || breakpoint.breakpoint == 'lg' || breakpoint.breakpoint == 'xl') &&
			<div className='blocs-right'>
				<Typography variant="body1" className='h4'>Last URL</Typography>
				<Link to={ '/url/'+url.url.shortUrl } target="_blank" rel="noopener noreferrer">{ url.url.shortUrl }</Link>
				<p className='italic'>{ url.url.fullUrl }</p>
			</div>
			}
		</div>
	)
}

export default ListUrls
