import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import { Suspense, lazy } from 'react'
import ProductsPage from './pages/ProductsPage'
import Layout from './layouts/Layout'
// import ProductDetailsPage from './pages/ProductDetailsPage'
// import LoginPage from './pages/LoginPage'
import PrivateRoute from './guards/PrivateRoute'

const LoginPage = lazy(() => import('./pages/LoginPage'))
const ProductDetailsPage = lazy(() => import('./pages/ProductDetailsPage'))

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route
					path='products'
					element={
						<PrivateRoute>
							<ProductsPage />
						</PrivateRoute>
					}
				/>
				<Route
					path='products/:id'
					element={
						<Suspense
							fallback={
								<h1>
									!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Loading....
								</h1>
							}
						>
							<ProductDetailsPage />
						</Suspense>
					}
				/>
			</Route>
			<Route
				path='/login'
				element={
					<Suspense>
						<LoginPage />
					</Suspense>
				}
			/>
		</Routes>
	)
}

export default App
