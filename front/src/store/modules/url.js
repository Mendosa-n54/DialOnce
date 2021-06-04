// Api url
import api from '../../feathers'

export const setUrl = (content) => {
	return api.service('url-shortener').create(content)
}

export const getAllUrls = () => {
	return api.service('url-shortener')
		.find({
			query: {
				$sort: {
					createdAt: -1
				},
				$limit: 9999,
			},
		})
}

export const getUrl = (content) => {
	return api.service('url-shortener')
		.find({
			query: {
				shortUrl: content.shortUrl,
				$limit: 1,
			},
		})
}
