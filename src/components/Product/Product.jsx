import React from 'react'

const Product = ({
	product: { id, thumbnail, title, description, price },
	handleDelete,
}) => {
	return (
		<div className='card' style={{ width: '18rem' }}>
			<img src={thumbnail} className='card-img-top' alt='...' />
			<div className='card-body'>
				<h5 className='card-title'>{title}</h5>
				<p className='card-text'>{description}</p>
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
