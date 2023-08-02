import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleProduct } from '../api/products'
import Product from '../components/Product/Product'

const ProductDetailsPage = () => {
	const { id } = useParams()
	const [product, setProduct] = useState(null)
	const [error, setError] = useState('')
	const [isLoading, setIsLoading] = useState(false)

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
	return (
		<>
			{isLoading && <h1>Loading..</h1>}
			{error && <h1>{error}..</h1>}
			{product && <Product product={product} />}
		</>
	)
}

export default ProductDetailsPage
