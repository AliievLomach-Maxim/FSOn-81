import { createReducer } from '@reduxjs/toolkit'
import { initialState } from './initialState'
// import { DECREMENT_NUMBER, DEFAULT_NUMBER, INCREMENT_NUMBER } from './types'
import { decrementAction, incrementAction } from './actions'

// export const numberReducer = (state = initialState, { type, payload }) => {
// 	switch (type) {
// 		case INCREMENT_NUMBER:
// 			return { ...state, number: state.number + payload }
// 		case DEFAULT_NUMBER:
// 			return { ...state, number: 0 }
// 		case DECREMENT_NUMBER:
// 			return { ...state, number: state.number - payload }

// 		default:
// 			return state
// 	}
// }

export const numberReducer = createReducer(initialState, {
	[incrementAction]: (state, { payload }) => ({
		...state,
		number: state.number + payload,
	}),
	[decrementAction]: (state, { payload }) => ({
		...state,
		number: state.number - payload,
	}),
})
