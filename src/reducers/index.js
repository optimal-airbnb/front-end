import {
	USER_REGISTER_START,
	USER_REGISTER_SUCCESS,
	USER_REGISTER_FAIL,
	USER_LOGIN_START,
	USER_LOGIN_SUCCESS,
} from '../actions/index'

export let intitialState = {
	isLoading: false,
	error: '',
}

export const reducer = (state = intitialState, action) => {
	switch (action.type) {
		case USER_REGISTER_START:
		case USER_LOGIN_START:
			return {
				...state,
				isLoading: true,
				error: '',
			}
	}
}
