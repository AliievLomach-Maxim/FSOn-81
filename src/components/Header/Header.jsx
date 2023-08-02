import { Link, NavLink } from 'react-router-dom'
import './styled.css'
const Header = ({ open }) => {
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
					</div>
				</div>
				<button onClick={open} className='btn btn-outline-success'>
					Open Modal
				</button>
			</div>
		</nav>
	)
}

export default Header
