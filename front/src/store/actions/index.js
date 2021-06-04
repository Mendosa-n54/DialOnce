// actions/index.js

import * as ACTION_TYPES from '../types'

export const mediaQuery = (breakpoint) => {
	return {
		type: ACTION_TYPES.MEDIA_QUERY,
		breakpoint,
	}
}

export const changeTheme = (theme) => {
	return {
		type: ACTION_TYPES.CHANGE_THEME,
		theme,
	}
}

export const changeColor = (color) => {
	return {
		type: ACTION_TYPES.CHANGE_COLOR,
		color,
	}
}

export const currentUrl = (url) => {
	return {
		type: ACTION_TYPES.CURRENT_URL,
		url,
	}
}
