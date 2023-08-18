import { reducer } from './reducer'
import { configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

// const persistConfig = {
// 	key: 'root',
// 	storage,
// 	whitelist: ['number'],
// 	// blackList: [],
// }
// const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({ reducer })
// export const store = configureStore({ reducer: persistedReducer })

export const persistor = persistStore(store)
