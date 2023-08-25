import { createSlice } from '@reduxjs/toolkit'
import { getAllTodoThunk } from './thunks'

const handleGetAll = (state, { payload }) => {
	state.todo = payload
}
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

const todoSlice = createSlice({
	name: 'todo',
	initialState: { todo: null, isLoading: false, error: '' },
	extraReducers: (builder) => {
		builder
			.addCase(getAllTodoThunk.fulfilled, handleGetAll)
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

export const todoReducer = todoSlice.reducer
