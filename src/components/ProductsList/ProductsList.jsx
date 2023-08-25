import Product from '../Product/Product'
import { getProductsThunk } from '../../store/products/thunks'
import { useEffect, useState } from 'react'
import {
	productsSelector,
	selectProducts,
} from '../../store/products/selectors'
import SearchForm from './SearchForm'
import { setFilter } from '../../store/products/slice'
import { useDispatch, useSelector } from 'react-redux'

const ProductsList = () => {
	const [number, setNumber] = useState(0)
	const dispatch = useDispatch()
	const { isLoading, error } = useSelector(productsSelector)
	const sortedProducts = useSelector(selectProducts)

	useEffect(() => {
		!sortedProducts && dispatch(getProductsThunk())
	}, [dispatch, sortedProducts])

	const handleSubmit = ({ search }) => {
		dispatch(setFilter(search))
	}

	return (
		<>
			<SearchForm handleSubmit={handleSubmit} />
			<button onClick={() => setNumber((prev) => prev + 1)}>
				{number}
			</button>
			{isLoading && <h2>Loading...</h2>}
			{error && <h2>{error}</h2>}
			{sortedProducts && (
				<>
					{sortedProducts.length === 0 && <h2>Products not found</h2>}
					{sortedProducts.map((product) => (
						<Product key={product.id} product={product} />
					))}
				</>
			)}
		</>
	)
}

export default ProductsList
