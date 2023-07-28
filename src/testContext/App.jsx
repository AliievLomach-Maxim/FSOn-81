import Alert from './Alert'
import AlertProvider from './Context/AlertContext'
import Main from './Main'

// export const AlertContext = createContext()

const App = () => {
	// const [showAlert, setShowAlert] = useState(false)
	return (
		// <AlertContext.Provider value={{ showAlert, setShowAlert }}>
		<AlertProvider>
			<div className='container pt-2'>
				<Alert />
				<Main />
			</div>
		</AlertProvider>
		// </AlertContext.Provider>
	)
}

export default App
