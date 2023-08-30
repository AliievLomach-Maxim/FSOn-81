import { createSlice } from '@reduxjs/toolkit'
import { getAllTodoThunk } from './thunks'

const handleGetAll = (state, { payload }) => {
	state.todo = payload
}

const todoSlice = createSlice({
	name: 'todo',
	initialState: { todo: null },
	extraReducers: (builder) => {
		builder.addCase(getAllTodoThunk.fulfilled, handleGetAll)
	},
})

export const todoReducer = todoSlice.reducer
