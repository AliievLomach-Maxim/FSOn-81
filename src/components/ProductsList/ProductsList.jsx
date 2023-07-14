import Product from '../Product/Product'
import data from '../../data.json'
import { Component } from 'react'
import CreateProductForm from '../../Forms/CreateProductForm'
import { nanoid } from 'nanoid'

class ProductsList extends Component {
	state = {
		products: data,
	}

	handleDelete = (id) => {
		this.setState((prev) => ({
			products: prev.products.filter((product) => product.id !== id),
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
				<CreateProductForm
					createProduct={this.createProduct}
					isDuplicate={this.isDuplicate}
				/>
				{this.state.products.map((product) => (
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
