// import { combineReducers } from 'redux'
// import { numberReducer } from './number/reducer'
import { itemsReducer } from './items/reducer'
import { numberReducer } from './numberSlice/slice'
import { todoReducer } from './todo/slice'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { productsReducer } from './products/slice'

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['test'],
	// blackList: [],
}
const persistedReducer = persistReducer(persistConfig, numberReducer)

export const reducer = {
	// number: numberReducer,
	number: persistedReducer,
	// number: numberReducer,
	items: itemsReducer,
	todo: todoReducer,
	products: productsReducer,
}
