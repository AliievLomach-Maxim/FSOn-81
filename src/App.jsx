import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import { Suspense, lazy } from 'react'
import ProductsPage from './pages/ProductsPage'
import Layout from './layouts/Layout'
import Loader from './components/Loader/Loader'
import Error from './components/Error/Error'
// import PrivateRoute from './guards/PrivateRoute'

const LoginPage = lazy(() => import('./pages/LoginPage'))
const ProductDetailsPage = lazy(() => import('./pages/ProductDetailsPage'))
const ToDoPage = lazy(() => import('./pages/ToDoPage'))

const App = () => {
	return (
		<Suspense fallback={<h1>Loading....</h1>}>
			<Loader />
			<Error />
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path='products' element={<ProductsPage />} />
					<Route
						path='products/:id'
						element={<ProductDetailsPage />}
					/>
					<Route path='todo' element={<ToDoPage />} />
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
		</Suspense>
	)
}

export default App
