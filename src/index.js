import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
// import App from './testContext/App'

import { Provider } from 'react-redux'
import { persistor, store } from './store/store'
import { PersistGate } from 'redux-persist/integration/react'

const root = document.getElementById('root')
ReactDOM.createRoot(root).render(
	<BrowserRouter>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
	</BrowserRouter>
)
