import { createSlice } from '@reduxjs/toolkit'
import { getProductsThunk, getSingleProductThunk } from './thunks'
import { handleAllProducts, handleSingleProducts } from './handlers'

const productsSlice = createSlice({
	name: 'products',
	initialState: {
		products: null,
		singleProduct: null,
		filter: '',
	},
	reducers: {
		setFilter(state, { payload }) {
			state.filter = payload
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getProductsThunk.fulfilled, handleAllProducts)
			.addCase(getSingleProductThunk.fulfilled, handleSingleProducts)
	},
})
export const productsReducer = productsSlice.reducer
export const { setFilter } = productsSlice.actions
