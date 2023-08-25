import { useDispatch, useSelector } from 'react-redux'
import Product from '../Product/Product'
import { getProductsThunk } from '../../store/products/slice'
import { useEffect } from 'react'

const ProductsList = () => {
	const dispatch = useDispatch()
	const { products, isLoading, error } = useSelector(
		(state) => state.products
	)

	useEffect(() => {
		!products && dispatch(getProductsThunk())
	}, [dispatch, products])

	return (
		<>
			{isLoading && <h2>Loading...</h2>}
			{error && <h2>{error}</h2>}
			{products && (
				<>
					{products.length === 0 && <h2>Products not found</h2>}
					{products.map((product) => (
						<Product key={product.id} product={product} />
					))}
					{/* <button
						className='btn btn-success'
						onClick={handleClickLoadMore}
					>
						Load more...
					</button> */}
				</>
			)}
		</>
	)
}

export default ProductsList
// import Product from '../Product/Product'

// import { getAllProducts, getProductsBySearch } from '../../api/products'
// import SearchForm from '../Forms/SearchForm'

// import React, { useCallback, useEffect, useMemo, useState } from 'react'
// import { useSearchParams } from 'react-router-dom'

// const LIMIT = 10

// const ProductsList = () => {
// 	const [products, setProducts] = useState(null)
// 	const [error, setError] = useState('')
// 	// const [searchQuery, setSearchQuery] = useState('')
// 	const [page, setPage] = useState(1)
// 	const [isLoading, setIsLoading] = useState(false)

// 	const [params, setParams] = useSearchParams()

// 	const searchQuery = useMemo(() => params.get('search'), [params])

// 	useEffect(() => {
// 		const handleProducts = async () => {
// 			const skip = page * LIMIT - LIMIT
// 			try {
// 				setIsLoading(true)
// 				const data = await getAllProducts(LIMIT, skip)
// 				setProducts((prev) =>
// 					prev ? [...prev, ...data.products] : data.products
// 				)
// 			} catch (error) {
// 				setError(error.message)
// 				console.log(error)
// 			} finally {
// 				setIsLoading(false)
// 			}
// 		}
// 		handleProducts()
// 	}, [page])

// 	const handleSearchProducts = useCallback(async () => {
// 		try {
// 			setIsLoading(true)
// 			const data = await getProductsBySearch(searchQuery)
// 			setProducts(data.products)
// 		} catch (error) {
// 			setError(error.message)
// 			console.log(error)
// 		} finally {
// 			setIsLoading(false)
// 		}
// 	}, [searchQuery])

// 	useEffect(() => {
// 		searchQuery && handleSearchProducts()
// 	}, [handleSearchProducts, searchQuery])

// 	const handleSearch = (searchQuery) => {
// 		// setSearchQuery(searchQuery)
// 		setParams({ search: searchQuery })
// 	}

// 	const handleClickLoadMore = () => {
// 		setPage((prev) => prev + 1)
// 	}

// 	return (
// 		<>
// 			<SearchForm handleSearch={handleSearch} />
// 			{isLoading && <h2>Loading...</h2>}
// 			{error && <h2>{error}</h2>}
// 			{products && (
// 				<>
// 					{products.length === 0 && <h2>Products not found</h2>}
// 					{products.map((product) => (
// 						<Product key={product.id} product={product} />
// 					))}
// 					<button
// 						className='btn btn-success'
// 						onClick={handleClickLoadMore}
// 					>
// 						Load more...
// 					</button>
// 				</>
// 			)}
// 		</>
// 	)
// }

// export default ProductsList
