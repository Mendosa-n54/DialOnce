// Modules
import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import shortid from 'shortid'
import { Formik, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'
import moment from 'moment'
moment.locale('fr')

// Files
import Context from '../store/context/'
import * as apiUrl from '../store/modules/url'

// Material-ui
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'


const styleShortUrl = {
	padding: '10px 0 0 20px',
}


const Home = () => {
	const { breakpoint } = useContext(Context)
	const { color } = useContext(Context)
	const { url, setUrl } = useContext(Context)

	const [fullUrl, setFullUrl] = useState('') // eslint-disable-line
	const [shortUrl, setShortUrl] = useState('')
	const [str, setStr] = useState('')

	useEffect(() => {
		if (str !== '') {
			setShortUrl(str)
			setUrl( { url: { fullUrl: fullUrl, shortUrl: str }, type: 'CURRENT_URL' } )
			apiUrl.setUrl({ fullUrl: fullUrl, shortUrl: str })
				.then((response) => {
					console.log('response : ', response)
				}).catch((err) => console.error(err))
		}
	}, [str])

	function transformToShortUrl(values) {
		setFullUrl(values.inputUrl)
		setStr(shortid.generate)
	}

	return (
		<div>
			<div className='flex'>
				<div className='flex-1'>
					<Grid container>
						<Grid item xs={12} sm={12} md={12} lg={8} xl={8}>

							<Formik
								initialValues={{
									inputUrl: ''
								}}
								onSubmit={(values) => {
									transformToShortUrl(values)
								}}
								validationSchema={yup.object().shape({
									inputUrl: yup.string()
										.test({ message: 'Ce n\'est pas une URL', test: (value) => {
											if (value) {
												const expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/gi
												const regex = new RegExp(expression)
												return (value.match(regex))
											}
										} })
										.required('Requis'),
								})}
							>
								{ (props) => {
									const { values, touched, errors, handleChange, handleBlur, handleSubmit } = props
									return (
										<Form onSubmit={handleSubmit} className='form'>
											<div className='form-field'>
												<TextField
													id="inputUrl"
													placeholder="Saisissez une URL"
													type="text"
													label="Saisissez une URL"
													variant="outlined"
													value={values.inputUrl}
													onChange={handleChange}
													onBlur={handleBlur}
													color={ color.color }
													className={ errors.inputUrl && touched.inputUrl ? 'text-input form-field form-error' : 'text-input form-field' }
												/>
												<ErrorMessage name="inputUrl" component="div" className="error input-feedback form-feedback"></ErrorMessage>
											</div>

											<Button
												type="submit"
												onClick={((e) => {
													e.preventDefault()
													handleSubmit()
												})}
												variant="outlined"
												color={ color.color }
											>Valider</Button>
										</Form>
									)
								}}
							</Formik>
						</Grid>

						<Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
							{ shortUrl && shortUrl !== '' && <Typography variant="body1" style={ styleShortUrl }>Résultat :<Link to={ '/url/'+shortUrl } target="_blank" rel="noopener noreferrer">{ shortUrl }</Link></Typography> }
						</Grid>
					</Grid>
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
		</div>
	)
}

export default Home
