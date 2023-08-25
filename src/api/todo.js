import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://64e8ef7699cf45b15fe05737.mockapi.io/todo',
})

export const getAllTodo = async () => {
	const { data } = await instance()
	return data
}
