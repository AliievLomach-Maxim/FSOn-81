import { createSelector } from '@reduxjs/toolkit'

export const productsSelector = (state) => state.products

const products = (state) => state.products.products
const filter = (state) => state.products.filter

export const selectProducts = createSelector(
	products,
	filter,
	(products, filter) => {
		return products?.filter((el) => {
			console.log('filter')
			return el.title.toLowerCase().includes(filter.toLowerCase())
		})
	}
)

// export const sortedProductsSelector = (state) =>
// 	state.products.products &&
// 	state.products.products
// 		.filter((el) => {
// 			console.log('filter')
// 			return el.title
// 				.toLowerCase()
// 				.includes(state.products.filter.toLowerCase())
// 		})
// 		.toSorted((a, b) => {
// 			console.log('sorted')
// 			return a.price - b.price
// 		})
