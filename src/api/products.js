import axios from 'axios'

axios.defaults.baseURL = 'https://dummyjson.com/products'

export const getAllProducts = async (limit, skip) => {
	const { data } = await axios(`?limit=${limit}&skip=${skip}`)
	return data
}

export const getSingleProduct = async (id) => {
	const { data } = await axios(`/${id}`)
	return data
}

export const getProductsBySearch = async (query) => {
	const { data } = await axios(`/search?q=${query}`)
	return data
}
