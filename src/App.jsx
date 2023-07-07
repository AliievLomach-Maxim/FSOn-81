import Container from './components/Container/Container'
import ProductsList from './components/ProductsList/ProductsList'
import data from './data.json'

const App = () => {
	return (
		<Container>
			<ProductsList products={data} />
		</Container>
	)
}

export default App
