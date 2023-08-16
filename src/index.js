import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
// import App from './testContext/App'

import { Provider } from 'react-redux'
import { store } from './store/store'

const root = document.getElementById('root')
ReactDOM.createRoot(root).render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
)
