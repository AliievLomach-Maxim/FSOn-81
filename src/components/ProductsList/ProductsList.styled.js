import { styled } from 'styled-components'

export const Container = styled.div`
	color: black;
	border: 2px solid black;
	background-color: purple;
	h5 {
		text-decoration: underline;
	}
	button {
		background-color: ${(props) => {
			return props.price > 1000 ? 'red' : 'green'
		}};
	}
	/* &:hover {
		background-color: black;
	} */
`

export const Container2 = styled(Container)`
	background-color: red;
`
