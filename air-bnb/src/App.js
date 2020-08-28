import React from "react";
import { connect } from "react-redux";
import { addListing, userRegister, userLogin } from "./store/actions";
import ListingsForm from "./components/ListingsForm";
import Nav from "./components/Navbar";
import SignUp from "./components/SignUp";
import SignInSide from "./components/SignInSide";
import PrivateRoute from "./components/PrivateRoute";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

function App(props) {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/register">
            <SignUp userRegister={props.userRegister} />
          </Route>
          <Route exact path="/login">
            <SignInSide userLogin={props.userLogin} />
          </Route>
        </Switch>
        <div className="form-container">
          <div className="form-wrapper">
            <div className="header-container">
              <h2>Rental Price Calculator</h2>
            </div>
            <PrivateRoute exact path="/listings">
              <ListingsForm addListing={props.addListing} price={props.price} />
            </PrivateRoute>
          </div>
        </div>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    listings: state.listings,
    price: state.price,
    user: state.user,
    error: state.error,
  };
};

export default connect(mapStateToProps, {
  addListing,
  userRegister,
  userLogin,
})(App);