import React from "react";
import { connect } from "react-redux";
import { addListing } from "./store/actions";
import ListingsForm from "./components/ListingsForm";

function App(props) {
  return (
    <div className="App">
      <ListingsForm addListing={props.addListing} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    listings: state.listings,
    error: state.error,
  };
};

export default connect(mapStateToProps, { addListing })(App);
