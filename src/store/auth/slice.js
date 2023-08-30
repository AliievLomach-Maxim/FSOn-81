import { createSlice } from '@reduxjs/toolkit'
import { loginThunk } from './thunks'

const initialState = {
	token: '',
	user: null,
}

const handleLogin = (state, { payload }) => {
	state.token = payload.token
	state.user = payload.user
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logOut(state) {
			state.token = ''
			state.user = null
		},
	},
	extraReducers: (builder) => {
		builder.addCase(loginThunk.fulfilled, handleLogin)
	},
})

export const authReducer = authSlice.reducer
export const { logOut } = authSlice.actions
