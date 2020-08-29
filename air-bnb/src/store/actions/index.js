import axios from "axios";
import axiosWithAuth from "../../utils/axiosWithAuth";

export const ADD_LISTING = "ADD_LISTING";
export const ADD_LISTING_FAILED = "ADD_LISTING_FAILED";
export const DELETE_LISTING_START = "DELETE_LISTING_START";
export const DELETE_LISTING_SUCCESSFUL = "DELETE_LISTING_SUCCESSFUL";
export const DELETE_LISTING_FAILED = "DELETE_LISTING_FAILED";
export const OPTIMAL_PRICE = "OPTIMAL_PRICE";
export const USER_REGISTER_START = "USER_REGISTER_START";
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
export const USER_REGISTER_FAIL = "USER_REGISTER_FAIL";
export const NEW_USER = "NEW_USER";
export const USER_LOGIN_START = "USER_LOGIN_START";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAIL = "USER_LOGIN_FAIL";

export const addListing = (newListing) => {
  return (dispatch) => {
    dispatch({ type: ADD_LISTING, payload: newListing });

    axios
      .post("https://airbnbpricer.herokuapp.com/predict", newListing)
      .then((res) => {
        console.log("NEW LISTING WAS ADDED SUCCESSFULLY", res);
        dispatch({ type: OPTIMAL_PRICE, payload: res.data });
      })
      .catch((err) => dispatch({ type: ADD_LISTING_FAILED, payload: err }));
  };
};

export const deleteListing = (listing) => {
  return (dispatch) => {
    dispatch({ type: DELETE_LISTING_START, payload: listing });

    axios
      .delete("https://reqres.in/api/users/2", listing)
      .then((res) => {
        dispatch({ type: DELETE_LISTING_SUCCESSFUL, payload: res.data });
      })
      .catch((err) => dispatch({ type: DELETE_LISTING_FAILED, payload: err }));
  };
};

export const userRegister = (user) => (dispatch) => {
  dispatch({ type: USER_REGISTER_START, payload: user });

  axiosWithAuth()
    .post("/api/auth/register/", {
      email: user.email,
      name: user.name,
      password: user.password,
      username: user.username,
    })
    .then((res) => {
      console.log(res.data);
      dispatch({ type: USER_REGISTER_SUCCESS, payload: res.data });
      localStorage.setItem("token", res.data.token);
      //   browserHistory.push("/login");
    })
    .then(() => {
      dispatch({ type: NEW_USER, payload: user });
    })
    .catch((err) => {
      dispatch({ type: USER_REGISTER_FAIL, payload: err });
    });
};

export const userLogin = (user) => (dispatch) => {
  dispatch({ type: USER_LOGIN_START, payload: user });
  axiosWithAuth()
    .post("/api/auth/login", {
      username: user.username,
      password: user.password,
    })
    .then((res) => {
      console.log(res.data);
      dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data });
      localStorage.setItem("token", res.data.token);
      //   history.push("/listings");
    })
    .catch((err) => {
      dispatch({ type: USER_LOGIN_FAIL, payload: err });
    });
};
