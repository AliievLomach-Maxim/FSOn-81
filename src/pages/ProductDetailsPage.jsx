import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { getSingleProduct } from '../api/products'
import Product from '../components/Product/Product'

const ProductDetailsPage = () => {
	const { id } = useParams()
	const [product, setProduct] = useState(null)
	const [error, setError] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	const location = useLocation()
	console.log('location :>> ', location)
	useEffect(() => {
		const handleProducts = async () => {
			try {
				setIsLoading(true)
				const data = await getSingleProduct(id)
				setProduct(data)
			} catch (error) {
				setError(error.message)
				console.log(error)
			} finally {
				setIsLoading(false)
			}
		}
		handleProducts()
	}, [id])

	const navigate = useNavigate()

	const handleClick = () => {
		const isBack = window.confirm('Are you sure?')
		isBack && navigate(location.state ?? '/')
	}

	return (
		<>
			<button
				className='btn btn-warning m-2'
				onClick={handleClick}
			>{`<`}</button>
			{/* <Link to={location.state} className='m-3'>
				Back
			</Link> */}
			{isLoading && <h1>Loading..</h1>}
			{error && <h1>{error}..</h1>}
			{product && <Product product={product} />}
		</>
	)
}

export default ProductDetailsPage

// import React from 'react'

// const Navigate = ({to}) => {
// const navigate = useNavigate()
// navigate(to)
// }

// export default Navigate
