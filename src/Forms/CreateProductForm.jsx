import { Component } from 'react'

class CreateProductForm extends Component {
	state = {
		title: 'qwerty',
		description: '',
		price: 0,
		brand: 'Apple',
		stock: true,
		isValid: true,
	}

	handleChange = ({ target: { value, name, checked } }) => {
		this.setState({ [name]: name === 'stock' ? checked : value })
	}

	handleBlur = ({ target: { value } }) => {
		if (this.props.isDuplicate(value))
			return this.setState({ isValid: false })
		this.setState({ isValid: true })
	}

	// handleChangeStock = ({ target: { checked } }) => {
	// 	this.setState({ stock: checked })
	// }

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.createProduct(this.state) ///
		this.setState({
			title: '',
			description: '',
			price: 0,
		})
	}

	render() {
		console.log('this.state :>> ', this.state)
		const { title, description, price, brand, stock, isValid } = this.state
		return (
			<form className='mb-3' onSubmit={this.handleSubmit}>
				<div className='mb-3'>
					<label htmlFor='exampleInputTitle' className='form-label'>
						Title:
					</label>
					<input
						name='title'
						type='text'
						className={`form-control ${!isValid && 'bg-danger'}`}
						id='exampleInputTitle'
						onChange={this.handleChange}
						value={title}
						onBlur={this.handleBlur}
					/>
				</div>
				<div className='mb-3'>
					<label
						htmlFor='exampleInputDescription'
						className='form-label'
					>
						Description:
					</label>
					<input
						name='description'
						type='text'
						className='form-control'
						id='exampleInputDescription'
						onChange={this.handleChange}
						value={description}
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='exampleInputPrice' className='form-label'>
						Price:
					</label>
					<input
						name='price'
						type='text'
						className='form-control'
						id='exampleInputPrice'
						onChange={this.handleChange}
						value={price}
					/>
				</div>
				<div className='mb-3'>
					<select
						className='form-select'
						aria-label='Default select example'
						onChange={this.handleChange}
						name='brand'
						value={brand}
					>
						<option value='Apple'>Apple</option>
						<option value='OPPO'>OPPO</option>
						<option value='Samsung'>Samsung</option>
					</select>
				</div>
				<div className='mb-3'>
					<div className='form-check'>
						<input
							name='stock'
							className='form-check-input'
							type='checkbox'
							id='flexCheckDefault'
							checked={stock}
							onChange={this.handleChange}
						/>
						<label
							className='form-check-label'
							htmlFor='flexCheckDefault'
						>
							Stock
						</label>
					</div>
				</div>
				<button
					type='submit'
					className='btn btn-primary'
					disabled={
						!title || !description || !Number(price) || !isValid
					}
				>
					Create
				</button>
			</form>
		)
	}
}

export default CreateProductForm
