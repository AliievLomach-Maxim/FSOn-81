import { todoReducer } from './todo/slice'
import { productsReducer } from './products/slice'
import { authReducer } from './auth/slice'
import { rootReducer } from './root/slice'

export const reducer = {
	todo: todoReducer,
	products: productsReducer,
	auth: authReducer,
	root: rootReducer,
}
