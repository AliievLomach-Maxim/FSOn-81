import { Link, NavLink } from 'react-router-dom'
import './styled.css'
import { useDispatch } from 'react-redux'
import { getProductsThunk } from '../../store/products/slice'
const Header = ({ open }) => {
	const dispatch = useDispatch()
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
				<button onClick={open} className='btn btn-outline-success'>
					Open Modal
				</button>
				<button
					onClick={() => dispatch(getProductsThunk())}
					className='btn btn-outline-success'
				>
					Thunk
				</button>
			</div>
		</nav>
	)
}

export default Header
