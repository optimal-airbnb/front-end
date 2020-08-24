import { ADD_LISTING, ADD_LISTING_FAILED } from "../actions";

export const initialState = {
  listings: [],
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LISTING:
      return {
        ...state,
        listings: [...state.listings, action.payload],
      };
    case ADD_LISTING_FAILED:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};
