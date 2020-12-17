import { useContext } from 'react'
import './Header.css'

import { ThemeContext } from '../../ThemeContext'

import { languages } from '../../Options'


const [langEn, langRu] = [
	{title: 'Welcome to React', theme: ['light', 'dark']}, 
	{title: 'Добро пожаловать в Реаст', theme: ['Яркий', 'Тёмный']}
]


function Header () {

	const { theme, setTh, startLang, changedLang } = useContext(ThemeContext)

	return (
		<>
			<header className={theme}>
				<h1>{startLang === 'en' ? langEn.title : langRu.title}</h1>
				<select
					defaultValue={theme}
					onChange={e => setTh(e.target.value)}
				>
					<option value="light">{startLang === 'en' ? langEn.theme[0] : langRu.theme[0]}</option>
					<option value="dark">{startLang === 'en' ? langEn.theme[1] : langRu.theme[1]}</option>
				</select>


				<select  
					className='select-lang'
					defaultValue={startLang}
					onChange={e => changedLang(e.target.value)}>
					{languages.map((lang, i) => <option value={lang.prop} key={i}>{lang.name}</option>)}
				</select>
			</header>
		</>
	)
}

export default Header
