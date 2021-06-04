// Modules
import React, { useReducer, useEffect } from 'react'

// Files
import Context from '../context'
import * as ReducerMediaQuery from '../reducers/ReducerMediaQuery'
import * as ReducerTheme from '../reducers/ReducerTheme'
import * as ReducerColor from '../reducers/ReducerColor'
import * as ReducerUrl from '../reducers/ReducerUrl'

// Global state persistent (with localStorage)
const localStateMediaQuery = JSON.parse(localStorage.getItem('breakpoint'))
const localStateTheme = JSON.parse(localStorage.getItem('theme'))
const localStateColor = JSON.parse(localStorage.getItem('color'))
const localStateUrl = (typeof window === 'object' || typeof window !== 'undefined') ? JSON.parse(localStorage.getItem('url')) : null

function ContextState(props) {
	const [breakpoint, setBreakpoint] = useReducer(ReducerMediaQuery.reducerMediaQuery, localStateMediaQuery || ReducerMediaQuery.initialState)
	const [theme, setTheme] = useReducer(ReducerTheme.reducerTheme, localStateTheme || ReducerTheme.initialState)
	const [color, setColor] = useReducer(ReducerColor.reducerColor, localStateColor || ReducerColor.initialState)
	const [url, setUrl] = useReducer(ReducerUrl.reducerUrl, localStateUrl || ReducerUrl.initialState)

	useEffect(() => {
		localStorage.setItem('breakpoint', JSON.stringify(breakpoint))
	}, [breakpoint])
	useEffect(() => {
		localStorage.setItem('theme', JSON.stringify(theme))
	}, [theme])
	useEffect(() => {
		localStorage.setItem('color', JSON.stringify(color))
	}, [color])
	useEffect(() => {
		localStorage.setItem('url', JSON.stringify(url))
	}, [url])

	return (
		<Context.Provider
			value={{
				breakpoint, setBreakpoint,
				theme, setTheme,
				color, setColor,
				url, setUrl,
			}}>
			{ props.children }
		</Context.Provider>
	)
}

export default ContextState
