import Container from './components/Container/Container'
import ProductsList from './components/ProductsList/ProductsList'
import ProductsList2 from './components/ProductsList2/ProductsList2'
import data from './data.json'
import data2 from './data2.json'

const App = () => {
	return (
		<>
			{/* {ProductsList({ params1: data, params2: data2 })} */}
			<Container>
				<ProductsList products={data} />
			</Container>
			<Container>
				<ProductsList2 products={data2} />
			</Container>
		</>
	)
}

export default App
