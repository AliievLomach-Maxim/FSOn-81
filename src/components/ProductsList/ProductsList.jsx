import Product from '../Product/Product'
<<<<<<< Updated upstream

import { getAllProducts, getProductsBySearch } from '../../api/products'
import SearchForm from '../Forms/SearchForm'

import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const LIMIT = 10

const ProductsList = () => {
	const [products, setProducts] = useState(null)
	const [error, setError] = useState('')
	// const [searchQuery, setSearchQuery] = useState('')
	const [page, setPage] = useState(1)
	const [isLoading, setIsLoading] = useState(false)

	const [params, setParams] = useSearchParams()

	const searchQuery = useMemo(() => params.get('search'), [params])

	useEffect(() => {
		const handleProducts = async () => {
			const skip = page * LIMIT - LIMIT
			try {
				setIsLoading(true)
				const data = await getAllProducts(LIMIT, skip)
				setProducts((prev) =>
					prev ? [...prev, ...data.products] : data.products
				)
			} catch (error) {
				setError(error.message)
				console.log(error)
			} finally {
				setIsLoading(false)
			}
		}
		handleProducts()
	}, [page])

	const handleSearchProducts = useCallback(async () => {
		try {
			setIsLoading(true)
			const data = await getProductsBySearch(searchQuery)
			setProducts(data.products)
		} catch (error) {
			setError(error.message)
			console.log(error)
		} finally {
			setIsLoading(false)
		}
	}, [searchQuery])

	useEffect(() => {
		searchQuery && handleSearchProducts()
	}, [handleSearchProducts, searchQuery])

	const handleSearch = (searchQuery) => {
		// setSearchQuery(searchQuery)
		setParams({ search: searchQuery })
	}

	const handleClickLoadMore = () => {
		setPage((prev) => prev + 1)
	}

	return (
		<>
			<SearchForm handleSearch={handleSearch} />
=======
import { getProductsThunk } from '../../store/products/thunks'
import { useEffect, useMemo, useState } from 'react'
import {
	productsSelector,
	selectProducts,
	sortedProductsSelector,
} from '../../store/products/selectors'
import SearchForm from './SearchForm'
import { setFilter } from '../../store/products/slice'

const ProductsList = () => {
	const [number, setNumber] = useState(0)
	const dispatch = useDispatch()
	const { isLoading, error } = useSelector(productsSelector)
	const sortedProducts = useSelector(selectProducts)
	// const sortedProducts = useSelector(sortedProductsSelector)

	useEffect(() => {
		!sortedProducts && dispatch(getProductsThunk())
	}, [dispatch, sortedProducts])

	const handleSubmit = ({ search }) => {
		dispatch(setFilter(search))
	}

	// const filteredProducts = sortedProducts.filter((el) => {
	// 	console.log('filter')
	// 	return el.title.toLowerCase().includes(filter.toLowerCase())
	// })

	return (
		<>
			<SearchForm handleSubmit={handleSubmit} />
			<button onClick={() => setNumber((prev) => prev + 1)}>
				{number}
			</button>
>>>>>>> Stashed changes
			{isLoading && <h2>Loading...</h2>}
			{error && <h2>{error}</h2>}
			{sortedProducts && (
				<>
					{sortedProducts.length === 0 && <h2>Products not found</h2>}
					{sortedProducts.map((product) => (
						<Product key={product.id} product={product} />
					))}
					<button
						className='btn btn-success'
						onClick={handleClickLoadMore}
					>
						Load more...
					</button>
				</>
			)}
		</>
	)
}

export default ProductsList
<<<<<<< Updated upstream

// const STATUS = {
// 	PENDING: 'PENDING',
// 	FULFILLED: 'FULFILLED',
// 	REJECTED: 'REJECTED',
// 	IDLE: 'IDLE',
// }

// class ProductsList extends Component {
// 	static limit = 10
// 	state = {
// 		products: null,
// 		error: '',
// 		searchQuery: '',
// 		page: 1,
// 		status: STATUS.IDLE,
// 	}

// 	componentDidMount() {
// 		this.handleProducts()
// 	}

// 	componentDidUpdate(_, prevState) {
// 		if (prevState.searchQuery !== this.state.searchQuery)
// 			this.handleSearchProducts()

// 		if (prevState.page !== this.state.page) this.handleProducts()
// 	}

// 	handleSearchProducts = async () => {
// 		try {
// 			this.setState({ status: STATUS.PENDING })
// 			const data = await getProductsBySearch(this.state.searchQuery)
// 			this.setState({ products: data.products, status: STATUS.FULFILLED })
// 		} catch (error) {
// 			this.setState({ error: error.message, status: STATUS.REJECTED })
// 			console.log(error)
// 		}
// 	}

// 	handleProducts = async () => {
// 		const skip = this.state.page * ProductsList.limit - ProductsList.limit
// 		try {
// 			this.setState({ status: STATUS.PENDING })
// 			const data = await getAllProducts(ProductsList.limit, skip)
// 			this.setState((prev) => ({
// 				products: prev.products
// 					? [...prev.products, ...data.products]
// 					: data.products,
// 				status: STATUS.FULFILLED,
// 			}))
// 		} catch (error) {
// 			this.setState({ error: error.message, status: STATUS.REJECTED })
// 			console.log(error)
// 		}
// 	}

// 	handleSearch = (searchQuery) => {
// 		this.setState({ searchQuery })
// 	}

// 	handleClickLoadMore = () => {
// 		this.setState((prev) => ({ page: prev.page + 1 }))
// 	}

// 	render() {
// 		const { error, products, isLoading, status } = this.state
// 		const { PENDING, FULFILLED, REJECTED } = STATUS

// 		if (status === PENDING) return <h2>Loading...</h2>

// 		if (status === FULFILLED)
// 			return (
// 				<>
// 					{products.length === 0 && <h2>Products not found</h2>}
// 					{products.map((product) => (
// 						<Product
// 							key={product.id}
// 							product={product}
// 							handleDelete={this.handleDelete}
// 						/>
// 					))}
// 					<button
// 						className='btn btn-success'
// 						onClick={this.handleClickLoadMore}
// 					>
// 						Load more...
// 					</button>
// 				</>
// 			)

// 		if (status === REJECTED) return <h2>{error}</h2>
// 	}
// }

// export default ProductsList
=======
>>>>>>> Stashed changes
