import { createStore } from 'redux'
import { reducer } from './reducer'

// const reducer = (state, action) => {
// const reducer = (state, { type, payload }) => {
// 	// return action.number ? action.number : state
// 	// return action.number ? { ...state, number: action.number } : state

// 	switch (type) {
// 		case 'changeNumber':
// 			return { ...state, number: state.number + payload }
// 		case 'createItems':
// 			return { ...state, items: payload }

// 		default:
// 			return state
// 	}
// }

export const store = createStore(reducer)
// console.log('store.getState() :>> ', store.getState())

// store.dispatch({ type: 'changeNumber', payload: 1 })
// store.dispatch({ type: 'createItems', payload: [1, 2, 3] })

// console.log('store.getState() :>> ', store.getState())
