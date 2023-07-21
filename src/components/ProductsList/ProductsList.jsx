import Product from '../Product/Product'
import { Component } from 'react'
import { getAllProducts, getProductsBySearch } from '../../api/products'
import SearchForm from '../Forms/SearchForm'

const STATUS = {
	PENDING: 'PENDING',
	FULFILLED: 'FULFILLED',
	REJECTED: 'REJECTED',
	IDLE: 'IDLE',
}

class ProductsList extends Component {
	static limit = 10
	state = {
		products: null,
		error: '',
		searchQuery: '',
		page: 1,
		status: STATUS.IDLE,
	}

	componentDidMount() {
		this.handleProducts()
	}

	componentDidUpdate(_, prevState) {
		if (prevState.searchQuery !== this.state.searchQuery)
			this.handleSearchProducts()

		if (prevState.page !== this.state.page) this.handleProducts()
	}

	handleSearchProducts = async () => {
		try {
			this.setState({ status: STATUS.PENDING })
			const data = await getProductsBySearch(this.state.searchQuery)
			this.setState({ products: data.products, status: STATUS.FULFILLED })
		} catch (error) {
			this.setState({ error: error.message, status: STATUS.REJECTED })
			console.log(error)
		}
	}

	handleProducts = async () => {
		const skip = this.state.page * ProductsList.limit - ProductsList.limit
		try {
			this.setState({ status: STATUS.PENDING })
			const data = await getAllProducts(ProductsList.limit, skip)
			this.setState((prev) => ({
				products: prev.products
					? [...prev.products, ...data.products]
					: data.products,
				status: STATUS.FULFILLED,
			}))
		} catch (error) {
			this.setState({ error: error.message, status: STATUS.REJECTED })
			console.log(error)
		}
	}

	handleSearch = (searchQuery) => {
		this.setState({ searchQuery })
	}

	handleClickLoadMore = () => {
		this.setState((prev) => ({ page: prev.page + 1 }))
	}

	render() {
		const { error, products, isLoading, status } = this.state
		const { PENDING, FULFILLED, REJECTED } = STATUS

		if (status === PENDING) return <h2>Loading...</h2>

		if (status === FULFILLED)
			return (
				<>
					{products.length === 0 && <h2>Products not found</h2>}
					{products.map((product) => (
						<Product
							key={product.id}
							product={product}
							handleDelete={this.handleDelete}
						/>
					))}
					<button
						className='btn btn-success'
						onClick={this.handleClickLoadMore}
					>
						Load more...
					</button>
				</>
			)

		if (status === REJECTED) return <h2>{error}</h2>
	}
}

export default ProductsList
// class ProductsList extends Component {
// 	static limit = 10
// 	state = {
// 		products: null,
// 		error: '',
// 		// isLoading: false,
// 		searchQuery: '',
// 		page: 1,
// status:STATUS.IDLE
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
// 			this.setState({ isLoading: true })
// 			const data = await getProductsBySearch(this.state.searchQuery)
// 			this.setState({ products: data.products, isLoading: false })
// 		} catch (error) {
// 			this.setState({ error: error.message, isLoading: false })
// 			console.log(error)
// 		}
// 	}

// 	handleProducts = async () => {
// 		const skip = this.state.page * ProductsList.limit - ProductsList.limit
// 		try {
// 			this.setState({ isLoading: true })
// 			const data = await getAllProducts(ProductsList.limit, skip)
// 			this.setState((prev) => ({
// 				products: prev.products
// 					? [...prev.products, ...data.products]
// 					: data.products,
// 				isLoading: false,
// 			}))
// 		} catch (error) {
// 			this.setState({ error: error.message, isLoading: false })
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
// 		const { error, products, isLoading } = this.state
// return (
// 	<>
// 		<SearchForm handleSearch={this.handleSearch} />
// 		{isLoading && <h2>Loading...</h2>}
// 		{error && <h2>{error}</h2>}
// 		{products?.length === 0 && <h2>Products not found</h2>}
// 		{products?.map((product) => (
// 			<Product
// 				key={product.id}
// 				product={product}
// 				handleDelete={this.handleDelete}
// 			/>
// 		))}
// 		{products && (
// 			<button
// 				className='btn btn-success'
// 				onClick={this.handleClickLoadMore}
// 			>
// 				Load more...
// 			</button>
// 		)}
// 	</>
// 		)
// 	}
// }

// export default ProductsList

// if(data?.info?.someInfo?.secondName){console.log(object);}

// class ProductsList extends Component {
// 	state = {
// 		products: null,
// 		count: { count: 0 },
// 	}

// 	componentDidMount() {
// 		const localData = localStorage.getItem('products')
// 		if (localData && JSON.parse(localData).length > 0)
// 			this.setState({ products: JSON.parse(localData) })
// 		else this.setState({ products: data })
// 	}

// 	componentDidUpdate(prevProps, prevState) {
// 		if (prevState.products?.length !== this.state.products.length) {
// 			localStorage.setItem(
// 				'products',
// 				JSON.stringify(this.state.products)
// 			)
// 		}
// 	}

// 	handleDelete = (id) => {
// 		this.setState((prev) => ({
// 			products: prev.products.filter((product) => product.id !== id),
// 			count: { count: 0 },
// 		}))
// 	}

// 	createProduct = (data) => {
// 		if (this.isDuplicate(data.title))
// 			return alert(`${data.title} already exist`)

// 		const newProduct = {
// 			...data,
// 			thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
// 			id: nanoid(),
// 		}
// 		this.setState((prev) => ({
// 			products: [newProduct, ...prev.products],
// 		}))
// 	}

// 	isDuplicate = (title) =>
// 		this.state.products.find((product) => product.title === title)

// 	render() {
// 		return (
// 			<>
// 				<button
// 					onClick={() =>
// 						this.setState((prev) => ({
// 							count: { count: prev.count.count + 1 },
// 						}))
// 					}
// 				>
// 					click
// 				</button>
// 				<CreateProductForm
// 					createProduct={this.createProduct}
// 					isDuplicate={this.isDuplicate}
// 					count={this.state.count}
// 				/>
// 				{this.state.products?.map((product) => (
// 					<Product
// 						key={product.id}
// 						product={product}
// 						handleDelete={this.handleDelete}
// 					/>
// 				))}
// 			</>
// 		)
// 	}
// }

// export default ProductsList

// // if(data?.info?.someInfo?.secondName){console.log(object);}
