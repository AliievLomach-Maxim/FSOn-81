export const handlePending = (state) => {
	state.isLoading = true
	state.error = ''
}
export const handleRejected = (state, { error }) => {
	state.isLoading = false
	state.error = error.message
}

export const handleFulfilled = (state) => {
	state.isLoading = false
}

export const handleAllProducts = (state, { payload }) => {
	state.products = payload.products
}

export const handleSingleProducts = (state, { payload }) => {
	state.singleProduct = payload
}
