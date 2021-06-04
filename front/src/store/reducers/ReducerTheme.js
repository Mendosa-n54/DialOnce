// reducers/ReducerTheme.js

import * as ACTION_TYPES from '../types'

export const initialState = {
	theme: 0,
}

export const reducerTheme = (state, action) => {
	switch (action.type) {
	case ACTION_TYPES.CHANGE_THEME:
		return {
			...state,
			theme: action.theme
		}
	default:
		throw new Error()
	}
}
