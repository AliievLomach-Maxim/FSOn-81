import { DECREMENT_NUMBER, INCREMENT_NUMBER } from './types'

export const increment = (value) => ({
	type: INCREMENT_NUMBER,
	payload: value,
})

export const decrement = (value) => ({
	type: DECREMENT_NUMBER,
	payload: value,
})
