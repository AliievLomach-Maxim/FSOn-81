import React, { createContext, useContext, useState } from 'react'

const AlertContext = createContext()

export const useAlertContext = () => useContext(AlertContext)

const AlertProvider = ({ children }) => {
	const [showAlert, setShowAlert] = useState(false)

	return (
		<AlertContext.Provider value={{ showAlert, setShowAlert }}>
			{children}
		</AlertContext.Provider>
	)
}

export default AlertProvider
