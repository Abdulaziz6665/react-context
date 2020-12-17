import { useState, useEffect, useContext } from 'react'
import './Login.css'

import { ThemeContext } from '../../ThemeContext'

function Login () {


	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [disabled, setDisabled] = useState(true)

	const {startLang} = useContext(ThemeContext)
	
	const [langEn, langRu] = [
		{user: 'Username', password: 'Password'}, 
		{user: 'Имя пользователя', password: 'Пароль'}
	]

	const onSubmit = event => {

		event.preventDefault()

		console.log('Submitted', username)
	}

	useEffect(() => {

		setDisabled(!(username.length > 2 && password.length >= 6))
	
	}, [
		username,
		password,
	])

	return (
		<>
			<div id="login">

				<form onSubmit={onSubmit}>
					<div className="input">
						<label htmlFor="username">{startLang === 'en' ? langEn.user : langRu.user}</label>
						<input
							id="username"
							type="text"
							placeholder={startLang === 'en' ? `Enter ${langEn.user}` : `Ввeдите ${langRu.user}`}
							autoComplete="off"
							spellCheck={false}
							onChange={e => setUsername(e.target.value)}
						/>
					</div>
					<div className="input">
						<label htmlFor="password">{startLang === 'en' ? langEn.password : langRu.password}</label>
						<input
							id="password"
							type="password"
							placeholder={startLang === 'en' ? `Enter ${langEn.password}` : `Вводите ${langRu.password}`}
							autoComplete="current-password"
							onChange={e => setPassword(e.target.value)}
						/>
					</div>
					<div>
						<button disabled={disabled}>
							<span>Login</span>
						</button>
					</div>
				</form>

			</div>
		</>
	)
}

export default Login
