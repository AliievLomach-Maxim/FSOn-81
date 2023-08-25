import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://dummyjson.com/products',
})

export const getAllProducts = async (limit, skip) => {
	const { data } = await instance(`?limit=${limit}&skip=${skip}`)
	return data
}

export const getSingleProduct = async (id) => {
	const { data } = await instance(`/${id}`)
	return data
}

export const getProductsBySearch = async (query) => {
	const { data } = await instance(`/search?q=${query}`)
	return data
}
