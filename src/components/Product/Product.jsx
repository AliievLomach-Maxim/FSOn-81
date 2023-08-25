import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Product = ({
	product: { id, thumbnail, title, description, price, brand, stock },
	handleDelete,
}) => {
	const location = useLocation()
	return (
		<div className='card' style={{ width: '18rem' }}>
			<img src={thumbnail} className='card-img-top' alt='...' />
			<div className='card-body'>
				<h5 className='card-title'>{title}</h5>
				<p className='card-text'>{description}</p>
				<p className='card-text'>Brand: {brand}</p>
				<p className='card-text'>Price: $ {price.toString()}</p>
				<Link
					to={id.toString()}
					state={location}
					// state={{ location, name: 'qwrety', age: 32 }}
				>
					Details
				</Link>
				<button className='btn btn-primary'>{price}</button>
				<button
					className='btn btn-danger ms-2'
					onClick={() => handleDelete(id)}
				>
					Delete
				</button>
			</div>
		</div>
	)
}

export default Product
