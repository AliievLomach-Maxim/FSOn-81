import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
// import Header from './components/Header/Header'
import Layout from './layouts/Layout'
import ProductDetailsPage from './pages/ProductDetailsPage'

const App = () => {
	return (
		// <>
		// <Header />
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path='products' element={<ProductsPage />}>
					<Route path=':id' element={<ProductDetailsPage />} />
				</Route>
			</Route>
			{/* <Route path='/' element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path='products' element={<ProductsPage />} />
				<Route path='products/:id' element={<ProductDetailsPage />} />
			</Route> */}
		</Routes>
		// </>
	)
}

export default App
