import axios from "axios";

export const ADD_LISTING = "ADD_LISTING";
export const ADD_LISTING_FAILED = "ADD_LISTING_FAILED";

export const addListing = (newListing) => {
  return (dispatch) => {
    dispatch({ type: ADD_LISTING, payload: newListing });

    axios
      .post("https://airbnbpricer.herokuapp.com/predict", newListing)
      .then((res) => {
        console.log("NEW LISTING WAS ADDED SUCCESSFULLY", res);
      })
      .catch((err) => dispatch({ type: ADD_LISTING_FAILED, payload: err }));
  };
};
