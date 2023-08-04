import { Component } from 'react'

class SearchForm extends Component {
	state = {}

	handleChange = ({ target: { value } }) => {
		this.props.handleSearch(value)
	}

	render() {
		return (
			<form className='d-flex' role='search'>
				<input
					className='form-control me-2'
					type='search'
					placeholder='Search'
					aria-label='Search'
					onChange={this.handleChange}
				/>
				<button className='btn btn-outline-success' type='submit'>
					Search
				</button>
			</form>
		)
	}
}

export default SearchForm
