import { createContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {

	const [theme, setTh] = useState(window.localStorage.getItem('theme') || 'light')
	const [startLang, changedLang] = useState('en')
	
	useEffect(() => { window.localStorage.setItem('theme', theme) }, [theme,])
	
	return (
		<ThemeContext.Provider value={{ theme, setTh, startLang, changedLang, }}>
			{children}
		</ThemeContext.Provider>
	)
}

export {
	ThemeProvider,
	ThemeContext,
}
