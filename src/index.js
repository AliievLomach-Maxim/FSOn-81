import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
// import App from './testContext/App'

const root = document.getElementById('root')
ReactDOM.createRoot(root).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
)
