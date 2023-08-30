import { NavLink, useNavigate } from 'react-router-dom'
import './styled.css'
import { useDispatch, useSelector } from 'react-redux'
import { tokenSelector } from '../../store/auth/selectors'
import { logOut } from '../../store/auth/slice'
import { deleteToken } from '../../api/auth'

const Header = () => {
	const navigate = useNavigate()
	const isAuth = useSelector(tokenSelector)
	const dispatch = useDispatch()

	const handleClick = () => {
		if (isAuth) {
			dispatch(logOut())
			return deleteToken()
		}
		navigate('/login')
	}
	return (
		<nav className='navbar bg-dark mb-3 navbar-expand-md'>
			<div className='container-fluid'>
				<span className='navbar-brand mb-0 h1 text-success'>
					Navbar
				</span>
				<div
					className='collapse navbar-collapse'
					id='navbarNavAltMarkup'
				>
					<div className='navbar-nav'>
						<NavLink className='nav-link text-white' to='/'>
							Home
						</NavLink>
						<NavLink className='nav-link text-white' to='/products'>
							Products
						</NavLink>
						<NavLink className='nav-link text-white' to='/todo'>
							Todo
						</NavLink>
					</div>
				</div>
				<button
					onClick={handleClick}
					className='btn btn-outline-success'
				>
					{isAuth ? 'Log out' : 'Sign In'}
				</button>
			</div>
		</nav>
	)
}

export default Header
