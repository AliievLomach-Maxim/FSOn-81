import { createSlice } from '@reduxjs/toolkit'

const initialState = { number: 0, secondNumber: 1, test: 100 }

const numberSlice = createSlice({
	name: 'number',
	initialState,
	reducers: {
		incrementAction: (state, { payload }) => {
			state.number += payload
			state.test = 15
		},
		decrementAction: (state, { payload }) => {
			state.number -= payload
		},
		// incrementAction: (state, { payload }) => ({
		// 	...state,
		// 	number: state.number + payload,
		// }),
		// decrementAction: (state, { payload }) => ({
		// 	...state,
		// 	number: state.number - payload,
		// }),
		// a: function (params) {},
		// b: (params) => {},
		// c() {},
	},
})

export const numberReducer = numberSlice.reducer
// export const {incrementAction,decrementAction} = numberSlice.actions
export const { decrementAction, incrementAction } = numberSlice.actions
