import axios from "axios";
// import { browserHistory } from "react-router-redux";
import axiosWithAuth from "../../utils/axiosWithAuth";

export const ADD_LISTING = "ADD_LISTING";
export const ADD_LISTING_FAILED = "ADD_LISTING_FAILED";
export const OPTIMAL_PRICE = "OPTIMAL_PRICE";
export const USER_REGISTER_START = "USER_REGISTER_START";
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
export const USER_REGISTER_FAIL = "USER_REGISTER_FAIL";
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

export const userRegister = (user) => (dispath) => {
  dispath({ type: USER_REGISTER_START, payload: user });

  axiosWithAuth()
    .post("/api/auth/register/", {
      email: user.email,
      name: user.name,
      password: user.password,
      username: user.username,
    })
    .then((res) => {
      console.log(res.data);
      dispath({ type: USER_REGISTER_SUCCESS, payload: res.data });
      localStorage.setItem("token", res.data.token);
      //   browserHistory.push("/login");
    })
    .catch((err) => {
      dispath({ type: USER_REGISTER_FAIL, payload: err });
    });
};

export const userLogin = (user) => (dispath) => {
  dispath({ type: USER_LOGIN_START, payload: user });
  axiosWithAuth()
    .post("/api/auth/login", {
      username: user.username,
      password: user.password,
    })
    .then((res) => {
      console.log(res.data);
      dispath({ type: USER_LOGIN_SUCCESS, payload: res.data });
      localStorage.setItem("token", res.data.token);
      //   history.push("/listings");
    })
    .catch((err) => {
      dispath({ type: USER_LOGIN_FAIL, payload: err });
    });
};
