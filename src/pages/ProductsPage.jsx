import React from 'react'
import ProductsList from '../components/ProductsList/ProductsList'
import { Outlet } from 'react-router-dom'

const ProductsPage = () => {
	return (
		<>
			<Outlet />
			<ProductsList />
		</>
	)
}

export default ProductsPage
