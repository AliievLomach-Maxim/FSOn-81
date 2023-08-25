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
