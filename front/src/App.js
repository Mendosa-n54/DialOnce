// Modules
import React from 'react'
import { hot } from 'react-hot-loader'

// Files
import ContextState from './store/config/'

// Components
import Structure from './pages/Structure'

class App extends React.PureComponent {
	render() {
		return (
			<ContextState>
				<Structure></Structure>
			</ContextState>
		)
	}
}

export default hot(module)(App)
