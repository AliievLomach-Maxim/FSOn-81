import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAllProducts, getSingleProduct } from '../../api/products'

export const getProductsThunk = createAsyncThunk('products/getAll', () =>
	getAllProducts()
)
// export const getProductsThunk = createAsyncThunk(
// 	'products/getAll',
// 	async (_, { rejectWithValue }) => {
// 		try {
// 			const data = await getAllProducts()
// 			return data
// 		} catch (error) {
// 			return rejectWithValue(error.response.data.message)
// 		}
// 	}
// )

export const getSingleProductThunk = createAsyncThunk(
	'products/getSingle',
	(id) => getSingleProduct(id)
)

const handlePending = (state) => {
	state.isLoading = true
	state.error = ''
}
const handleRejected = (state, { error }) => {
	state.isLoading = false
	state.error = error.message
}
// const handleRejected = (state, { payload }) => {
// 	state.isLoading = false
// 	state.error = payload
// 	console.log(payload)
// }

const handleFulfilled = (state) => {
	state.isLoading = false
}

const handleAllProducts = (state, { payload }) => {
	state.products = payload.products
}

const handleSingleProducts = (state, { payload }) => {
	state.singleProduct = payload
}

const productsSlice = createSlice({
	name: 'products',
	initialState: {
		products: null,
		isLoading: false,
		error: '',
		singleProduct: null,
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
	// extraReducers: (builder) => {
	// 	builder
	// 		// .addCase(getProductsThunk.pending, handlePending)
	// 		.addCase(getProductsThunk.fulfilled, (state, { payload }) => {
	// 			state.isLoading = false
	// 			state.products = payload.products
	// 		})
	// 		// .addCase(getProductsThunk.rejected, handleRejected)
	// 		// .addCase(getSingleProductThunk.pending, handlePending)
	// 		.addCase(getSingleProductThunk.fulfilled, (state, { payload }) => {
	// 			state.isLoading = false
	// 			state.singleProduct = payload
	// 		})
	// 		// .addCase(getSingleProductThunk.rejected, handleRejected)
	// 		.addMatcher(
	// 			(action) => action.type.endsWith('/pending'),
	// 			handlePending
	// 		)
	// 		.addMatcher(
	// 			(action) => action.type.endsWith('/rejected'),
	// 			handleRejected
	// 		)
	// },
})

// export const getProductsThunk = () => {
// 	return async (dispatch) => {
// 		try {
// 			dispatch(productsSlice.actions.fetching())
// 			const data = await getAllProducts(10, 0)
// 			dispatch(productsSlice.actions.success(data.products))
// 		} catch (error) {
// 			dispatch(productsSlice.actions.rejected(error.message))
// 		}
// 	}
// }

// const productsSlice = createSlice({
// 	name: 'products',
// 	initialState: { products: null, isLoading: false, error: '' },
// 	extraReducers: (builder) => {
// 		builder
// 			.addCase(getProductsThunk.pending, (state) => {
// 				state.isLoading = true
// 				state.error = ''
// 			})
// 			.addCase(getProductsThunk.fulfilled, (state, { payload }) => {
// 				state.isLoading = false
// 				state.products = payload.products
// 			})
// 			.addCase(getProductsThunk.rejected, (state, { payload }) => {
// 				state.isLoading = false
// 				state.error = payload
// 			})
// 	},
// 	// extraReducers: {
// 	// 	[getProductsThunk.pending]: (state) => {
// 	// 		state.isLoading = true
// 	// 		state.error = ''
// 	// 	},
// 	// 	[getProductsThunk.fulfilled]: (state, { payload }) => {
// 	// 		state.isLoading = false
// 	// 		state.products = payload.products
// 	// 	},
// 	// 	[getProductsThunk.rejected]: (state, { payload }) => {
// 	// 		state.isLoading = false
// 	// 		state.error = payload
// 	// 	},
// 	// },
// 	// reducers: {
// 	// 	fetching(state) {
// 	// 		state.isLoading = true
// 	// 		state.error = ''
// 	// 	},
// 	// 	success(state, { payload }) {
// 	// 		state.isLoading = false
// 	// 		state.products = payload
// 	// 	},
// 	// 	rejected(state, { payload }) {
// 	// 		state.isLoading = false
// 	// 		state.error = payload
// 	// 	},
// 	// },
// })

export const productsReducer = productsSlice.reducer
