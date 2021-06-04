// reducers/ReducerColor.js

import * as ACTION_TYPES from '../types'

export const initialState = {
	color: 'primary',
}

export const reducerColor = (state, action) => {
	switch (action.type) {
	case ACTION_TYPES.CHANGE_COLOR:
		return {
			...state,
			color: action.color
		}
	default:
		throw new Error()
	}
}
