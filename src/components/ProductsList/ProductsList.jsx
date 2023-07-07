import PropTypes from 'prop-types'
// import styled from './ProductsList.module.css'
// import './style.css'
// import classNames from 'classnames'
import { Container, Container2 } from './ProductsList.styled'

const ProductsList = ({ products }) => {
	return products.map(({ id, images, title, description, price }) => (
		<Container key={id} price={price}>
			<img
				src={
					images?.[0]
						? images[0]
						: 'https://i.dummyjson.com/data/products/6/4.jpg'
				}
				alt='avatar'
			/>
			<Container2>
				<h5>{title}</h5>
				<p>{description}</p>
				<button>{price + 100} $</button>
			</Container2>
		</Container>
	))
}
// const ProductsList = ({ products }) => {
// 	return products.map(({ id, images, title, description, price }) => (
// 		<div key={id} className={styled.container}>
// 			<img
// 				src={
// 					images?.[0]
// 						? images[0]
// 						: 'https://i.dummyjson.com/data/products/6/4.jpg'
// 				}
// 				alt='avatar'
// 			/>
// 			<div>
// 				<h5>{title}</h5>
// 				<p>{description}</p>
// 				<button
// 					className={classNames(
// 						styled.priceBtn,
// 						price < 1000 ? styled.green : styled.red
// 					)}
// 					// className={classNames(styled.priceBtn, {
// 					// 	[styled.green]: price > 1000,
// 					// })}
// 					// className={`${styled.priceBtn} ${styled.green}`}
// 					// className={`${styled.priceBtn} ${
// 					// 	price < 1000 && styled.green
// 					// }`}
// 					// className={`${styled.priceBtn} ${
// 					// 	price > 1000 ? styled.red : styled.green
// 					// }`}
// 				>
// 					{price + 100} $
// 				</button>
// 			</div>
// 		</div>
// 	))
// }

// const ProductsList = (props) => {
// 	return props.products.map((product) => (
// 		<div key={product.id} className={styled.container}>
// 		{/* <div key={product.id} className='container'> */}
// 			{/* <div key={product.id} style={{ border: '2px solid black' }}> */}
// 			<img
// 				src={
// 					product.images?.[0]
// 						? product.images[0]
// 						: 'https://i.dummyjson.com/data/products/6/4.jpg'
// 				}
// 				// src={product.images[0]}

// 				alt='avatar'
// 			/>
// 			<div>
// 				<h5>{product.title}</h5>
// 				<p>{product.description}</p>
// 				<a href='_'>{product.price + 100} $</a>
// 			</div>
// 		</div>
// 	))
// }

export default ProductsList

ProductsList.propTypes = {
	products: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			images: PropTypes.array,
			title: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
		}).isRequired
	).isRequired,
}
