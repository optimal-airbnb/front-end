import axiosWithAuth from '../axiosWithAuth/axios'
import axios from 'axios'
import history from '../history'

export const USER_REGISTER_START = 'USER_REGISTER_START'
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS'
export const USER_REGISTER_FAIL = 'USER_REGISTER_FAIL'
export const USER_LOGIN_START = 'USER_LOGIN_START'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL'

export const userRegister = (user) => (dispath) => {
	dispath({ type: USER_REGISTER_START })
	console.log(user)
	axiosWithAuth()
		.post('/api/auth/register/', {
			email: user.email,
			name: user.name,
			password: user.password,
			username: user.username,
		})
		.then((res) => {
			console.log(res.data)
			dispath({ type: USER_REGISTER_SUCCESS, payload: res.data })
			localStorage.setItem('token', res.data.token)
		})
		.catch((err) => {
			dispath({
				type: USER_REGISTER_FAIL,
				payload: 'All fields must be filled out',
			})
		})
}

export const userLogin = (user) => (dispath) => {
	const userType = user.type

	dispath({ type: USER_LOGIN_START })
	console.log(user.type)

	axiosWithAuth()
		.post('/api/auth/login', {
			username: user.username,
			password: user.password,
		})
		.then((res) => {
			console.log(res.data)
			dispath({ type: USER_LOGIN_SUCCESS, payload: res.data })
			localStorage.setItem('token', res.data.token)
			history.pushState('/user/app')
		})
		.catch((err) => {
			dispath({
				type: USER_LOGIN_FAIL,
				payload: 'Invalid username or password',
			})
		})
}
