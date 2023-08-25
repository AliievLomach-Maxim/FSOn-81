import { reducer } from './reducer'
import { configureStore } from '@reduxjs/toolkit'
import {
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	persistStore,
} from 'redux-persist'
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

// const persistConfig = {
// 	key: 'root',
// 	storage,
// 	whitelist: ['number'],
// 	// blackList: [],
// }
// const persistedReducer = persistReducer(persistConfig, reducer)

<<<<<<< Updated upstream
export const store = configureStore({ reducer })
=======
// const customMid = (store) => {
// 	return (next) => {
// 		return (action) => {
// 			if (typeof action === 'function') {
// 				console.log(store)
// 				action(store.dispatch)
// 				return
// 			}
// 			return next(action)
// 		}
// 	}
// }

export const store = configureStore({
	reducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER,
				],
			},
		}),
})
>>>>>>> Stashed changes
// export const store = configureStore({ reducer: persistedReducer })

export const persistor = persistStore(store)
