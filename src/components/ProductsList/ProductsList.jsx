import Product from '../Product/Product'
import data from '../../data.json'
import { Component } from 'react'
import CreateProductForm from '../../Forms/CreateProductForm'
import { nanoid } from 'nanoid'

class ProductsList extends Component {
	state = {
		products: null,
		count: { count: 0 },
	}

	componentDidMount() {
		const localData = localStorage.getItem('products')
		if (localData && JSON.parse(localData).length > 0)
			this.setState({ products: JSON.parse(localData) })
		else this.setState({ products: data })
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.products?.length !== this.state.products.length) {
			localStorage.setItem(
				'products',
				JSON.stringify(this.state.products)
			)
		}
	}

	handleDelete = (id) => {
		this.setState((prev) => ({
			products: prev.products.filter((product) => product.id !== id),
			count: { count: 0 },
		}))
	}

	createProduct = (data) => {
		if (this.isDuplicate(data.title))
			return alert(`${data.title} already exist`)

		const newProduct = {
			...data,
			thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
			id: nanoid(),
		}
		this.setState((prev) => ({
			products: [newProduct, ...prev.products],
		}))
	}

	isDuplicate = (title) =>
		this.state.products.find((product) => product.title === title)

	render() {
		return (
			<>
				<button
					onClick={() =>
						this.setState((prev) => ({
							count: { count: prev.count.count + 1 },
						}))
					}
				>
					click
				</button>
				<CreateProductForm
					createProduct={this.createProduct}
					isDuplicate={this.isDuplicate}
					count={this.state.count}
				/>
				{this.state.products?.map((product) => (
					<Product
						key={product.id}
						product={product}
						handleDelete={this.handleDelete}
					/>
				))}
			</>
		)
	}
}

export default ProductsList

// if(data?.info?.someInfo?.secondName){console.log(object);}
