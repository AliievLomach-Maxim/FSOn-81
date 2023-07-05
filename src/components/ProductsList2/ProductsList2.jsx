const ProductsList2 = ({ products }) =>
	products.map((product) => (
		<div key={product.id} className='card' style={{ width: '18rem' }}>
			<img src={product.images[0]} className='card-img-top' alt='...' />
			<div className='card-body'>
				<h5 className='card-title'>{product.title}</h5>
				<p className='card-text'>{product.description}</p>
				<a href='_' className='btn btn-primary'>
					{product.price} $
				</a>
			</div>
		</div>
	))
export default ProductsList2
