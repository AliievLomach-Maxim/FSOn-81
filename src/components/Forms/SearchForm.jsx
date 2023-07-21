import { Component } from 'react'

class SearchForm extends Component {
	state = {}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.handleSearch(e.target[0].value)
	}

	render() {
		return (
			<form className='d-flex' role='search' onSubmit={this.handleSubmit}>
				<input
					className='form-control me-2'
					type='search'
					placeholder='Search'
					aria-label='Search'
				/>
				<button className='btn btn-outline-success' type='submit'>
					Search
				</button>
			</form>
		)
	}
}

export default SearchForm
