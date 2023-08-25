import { createAsyncThunk } from '@reduxjs/toolkit'
import { getAllProducts, getSingleProduct } from '../../api/products'

export const getProductsThunk = createAsyncThunk('products/getAll', () =>
	getAllProducts(100, 0)
)

export const getSingleProductThunk = createAsyncThunk(
	'products/getSingle',
	(id) => getSingleProduct(id)
)
