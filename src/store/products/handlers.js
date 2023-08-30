export const handleAllProducts = (state, { payload }) => {
	state.products = payload.products
}

export const handleSingleProducts = (state, { payload }) => {
	state.singleProduct = payload
}
