import { createAsyncThunk } from '@reduxjs/toolkit'
import { login } from '../../api/auth'

export const loginThunk = createAsyncThunk('auth/login', (body) => login(body))
