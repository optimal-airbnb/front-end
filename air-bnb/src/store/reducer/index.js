import {
  ADD_LISTING,
  ADD_LISTING_FAILED,
  OPTIMAL_PRICE,
  USER_REGISTER_START,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
} from "../actions";

export const initialState = {
  listings: [],
  price: "",
  newUser: [],
  user: [],
  isLoading: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LISTING:
      return {
        ...state,
        listings: action.payload,
      };
    case ADD_LISTING_FAILED:
      return {
        error: action.payload,
      };
    case OPTIMAL_PRICE:
      return {
        price: action.payload,
      };
    case USER_REGISTER_START:
      return {
        isLoading: true,
      };
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        newUser: action.payload,
        isLoading: false,
      };
    case USER_REGISTER_FAIL:
      return {
        error: action.payload,
      };
    case USER_LOGIN_START:
      return {
        isLoading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    case USER_LOGIN_FAIL:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};
