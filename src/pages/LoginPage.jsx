import { useDispatch, useSelector } from 'react-redux'
import LoginForm from '../components/Forms/LoginForm'
import { authSelector, tokenSelector } from '../store/auth/selectors'
import { loginThunk } from '../store/auth/thunks'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const LoginPage = () => {
	const { isLoading, error } = useSelector(authSelector)
	const isAuth = useSelector(tokenSelector)
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const login = (body) => {
		dispatch(loginThunk(body))
	}

	useEffect(() => {
		isAuth && navigate('/')
	}, [isAuth, navigate])

	return (
		<>
			{isLoading && <h1>Loading...</h1>}
			{error && <h4>{error}</h4>}
			<LoginForm login={login} />
		</>
	)
}

export default LoginPage
