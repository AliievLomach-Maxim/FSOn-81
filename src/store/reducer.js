import { combineReducers } from 'redux'
import { numberReducer } from './number/reducer'
import { itemsReducer } from './items/reducer'

export const reducer = combineReducers({
	number: numberReducer,
	items: itemsReducer,
})
