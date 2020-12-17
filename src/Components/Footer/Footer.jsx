import { useContext } from 'react'
import './Footer.css'

import { ThemeContext } from '../../ThemeContext'

function Footer () {

	const { theme, startLang } = useContext(ThemeContext)


	const [langEn, langRU] = ['All rights reserved', 'Все права защищены']

	return (
		<>
			<footer className={theme}>
				<h2>{startLang === 'en' ? langEn : langRU} &copy; copyright</h2>
			</footer>
		</>
	)
}

export default Footer
