// Middleware : middlewareRedirection

const middlewareRedirection = (err) => {
	const url = window.location.href
	const matches = url.match(/^https?:\/\/([^/?#]+)(?:[/?#]|$)/i)
	let domain = matches && matches[1]
	domain = url.includes('https://') ? 'https://' + domain : 'http://' + domain

	if (err.code == 401) { // Code 401 : Not authorized
		document.location.href = domain + '/error-401'
	} else { // Code 500 : Internal server error
		document.location.href = domain + '/error-500'
	}
}

export default middlewareRedirection
