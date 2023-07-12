import Product from '../Product/Product'
import data from '../../data.json'
import { Component } from 'react'

class ProductsList extends Component {
	state = {
		products: data,
	}
	handleDelete = (id) => {
		this.setState((prev) => ({
			products: prev.products.filter((product) => product.id !== id),
		}))
		console.log('this.state :>> ', this.state)
	}
	render() {
		return this.state.products.map((product) => (
			<Product
				key={product.id}
				product={product}
				handleDelete={this.handleDelete}
			/>
		))
	}
}

export default ProductsList
