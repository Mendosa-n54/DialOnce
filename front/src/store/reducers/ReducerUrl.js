// reducers/ReducerUrl.js

import * as ACTION_TYPES from '../types'

export const initialState = {
	url: {
		fullUrl: '',
		shortUrl: '',
	},
}

export const reducerUrl = (state, action) => {
	switch (action.type) {
	case ACTION_TYPES.CURRENT_URL:
		return {
			...state,
			url: action.url,
		}
	default:
		throw new Error()
	}
}
