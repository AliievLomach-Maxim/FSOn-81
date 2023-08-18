import todo from '../../todo.json'
import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
	name: 'todo',
	initialState: { todo },
	reducers: {
		createTodo: (state, { payload }) => {
			state.todo.push(payload)
		},
		deleteTodo: (state, { payload }) => {
			state.todo = state.todo.filter((el) => el.id !== payload)
		},
		updateTodo: (state, { payload }) => {
			state.todo = state.todo.map((el) =>
				el.id === payload ? { ...el, completed: !el.completed } : el
			)
		},
		// updateTodo: (state, { payload }) => {
		// 	state.todo = state.todo.map((el) => {
		// 		if (el.id === payload) {
		// 			return { ...el, completed: !el.completed }
		// 		} else {
		// 			return el
		// 		}
		// 	})
		// },
	},
})

export const todoReducer = todoSlice.reducer
export const { createTodo, deleteTodo, updateTodo } = todoSlice.actions
