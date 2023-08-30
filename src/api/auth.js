import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://practices-api.vercel.app',
})

const setToken = (token) =>
	(instance.defaults.headers.common['Authorization'] = `Bearer ${token}`)

export const deleteToken = () =>
	delete instance.defaults.headers.common['Authorization']

export const login = async (body) => {
	const { data } = await instance.post('/auth/login', body)
	setToken(data.token)
	return data
}

export const getAllUsers = async () => {
	const { data } = await instance('/users')
	return data
}
