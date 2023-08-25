import { Field, Form, Formik } from 'formik'

const SearchForm = ({ handleSubmit }) => {
	return (
		<Formik
			initialValues={{ search: '' }}
			onSubmit={(value) => {
				handleSubmit(value)
			}}
		>
			<Form>
				<label htmlFor='1'>
					<Field name='search' type='text' />
				</label>
				<button type='submit'>Search</button>
			</Form>
		</Formik>
	)
}

export default SearchForm
