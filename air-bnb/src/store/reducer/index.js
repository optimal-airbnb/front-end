import {
  ADD_LISTING,
  ADD_LISTING_FAILED,
  DELETE_LISTING_START,
  DELETE_LISTING_SUCCESSFUL,
  DELETE_LISTING_FAILED,
  OPTIMAL_PRICE,
  USER_REGISTER_START,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  NEW_USER,
} from "../actions";

export const initialState = {
  listings: [],
  price: "",
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
        isLoading: true,
      };
    case ADD_LISTING_FAILED:
      return {
        error: action.payload,
      };
    case DELETE_LISTING_START:
      return {
        isLoading: true,
      };
    case DELETE_LISTING_SUCCESSFUL:
      return {
        ...state,
        listings: action.payload,
        isLoading: false,
      };
    case DELETE_LISTING_FAILED:
      return {
        error: action.payload,
      };
    case OPTIMAL_PRICE:
      return {
        price: action.payload,
        isLoading: false,
      };
    case USER_REGISTER_START:
      return {
        isLoading: true,
      };
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    case NEW_USER:
      return {
        ...state,
        user: action.payload,
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
