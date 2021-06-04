// reducers/ReducerMediaQuery.js

import * as ACTION_TYPES from '../types'

export const initialState = {
	breakpoint: 'xs',
}

export const reducerMediaQuery = (state, action) => {
	switch (action.type) {
	case ACTION_TYPES.MEDIA_QUERY:
		return {
			...state,
			breakpoint: action.breakpoint
		}
	default:
		throw new Error()
	}
}
