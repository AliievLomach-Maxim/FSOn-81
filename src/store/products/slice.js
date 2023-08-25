import { createSlice } from '@reduxjs/toolkit'
import { getProductsThunk, getSingleProductThunk } from './thunks'
import {
	handleAllProducts,
	handleSingleProducts,
	handlePending,
	handleRejected,
	handleFulfilled,
} from './handlers'

const productsSlice = createSlice({
	name: 'products',
	initialState: {
		products: null,
		isLoading: false,
		error: '',
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
			.addMatcher(
				(action) => action.type.endsWith('/pending'),
				handlePending
			)
			.addMatcher(
				(action) => action.type.endsWith('/rejected'),
				handleRejected
			)
			.addMatcher(
				(action) => action.type.endsWith('/fulfilled'),
				handleFulfilled
			)
	},
})
export const productsReducer = productsSlice.reducer
export const { setFilter } = productsSlice.actions
