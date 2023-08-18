import { createAction } from '@reduxjs/toolkit'
// import { DECREMENT_NUMBER, INCREMENT_NUMBER } from './types'

// export const increment = (value) => ({
// 	type: INCREMENT_NUMBER,
// 	payload: value,
// })

// export const decrement = (value) => ({
// 	type: DECREMENT_NUMBER,
// 	payload: value,
// })

export const decrementAction = createAction('number/decrement')

export const incrementAction = createAction('number/increment')

console.log(incrementAction.toString())
