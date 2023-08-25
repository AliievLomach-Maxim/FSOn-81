import { todoReducer } from './todo/slice'
import { productsReducer } from './products/slice'

export const reducer = {
	todo: todoReducer,
	products: productsReducer,
}
