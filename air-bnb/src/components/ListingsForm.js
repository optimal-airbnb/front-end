import React, { useState } from "react";
import { brooklyn, manhattan, queens, staten, bronx } from "../Data/Data";
// import { formSchema } from "./ListingsFormSchema";
// import * as yup from "yup";

import "../styles.css";

function ListingsForm(props) {
  const initialFormValues = {
    Borough: "",
    Neighbourhood: "",
    Room_type: "",
    Availability_365: "",
    Minimum_nights: "",
  };

  //   const initialErrorValues = {
  //     Borough: "",
  //     Neighbourhood: "",
  //     Room_type: "",
  //     Minimum_nights: "",
  //     Availability_365: "",
  //   };

  const [listing, setListing] = useState(initialFormValues);
  //   const [errorState, setErrorState] = useState(initialErrorValues);
  //   const [submitDisabled, setSubmitDisabled] = useState(true);

  //handles input
  const changeHandler = (e) => {
    e.persist();
    setListing({
      ...listing,
      [e.target.name]: e.target.value,
    });
  };

  //handles submit to an array for now
  const submitHandler = (e) => {
    e.preventDefault();
    props.addListing(listing);
    setListing(initialFormValues);
  };

  //checks input with yup
  //   const validate = (e) => {
  //     yup
  //       .reach(formSchema, e.target.name)
  //       .validate(e.target.value)
  //       .then((valid) => {
  //         setErrorState({ ...errorState, [e.target.name]: "" });
  //       })
  //       .catch((err) => {
  //         setErrorState({ ...errorState, [e.target.name]: err.errors[0] });
  //       });
  //   };

  //validate form when it changes. enable submit button when valid
  //   useEffect(() => {
  //     formSchema.isValid(ListingsForm).then((valid) => {
  //       setSubmitDisabled(!valid);
  //     });
  //   }, []);

  return (
    <form onSubmit={submitHandler} className="listings-form">
      <div className="inputs">
        <label htmlFor="Borough" className="form-label">
          <select
            id="Borough"
            name="Borough"
            value={listing.Borough}
            onChange={changeHandler}
          >
            <option value="">Borough</option>
            <option value="Bronx">The Bronx</option>
            <option value="Manhattan">Manhattan</option>
            <option value="Brooklyn">Brooklyn</option>
            <option value="Queens">Queens</option>
            <option value="Staten Island">Staten Island</option>
          </select>
          {/* {errorState["Borough"].length > 0 ? (
            <p className="error-msg">{errorState["Borough"]}</p>
          ) : null} */}
        </label>
        <label htmlFor="Neighbourhood" className="form-label">
          <select
            id="Neighbourhood"
            name="Neighbourhood"
            value={listing.Neighbourhood}
            onChange={changeHandler}
          >
            <option value="">Select one</option>
            {listing.Borough === "Manhattan" ? (
              <>
                {manhattan.map((n, index) => {
                  return (
                    <option value={n} key={index}>
                      {n}
                    </option>
                  );
                })}
              </>
            ) : listing.Borough === "Bronx" ? (
              <>
                {bronx.map((n, index) => {
                  return (
                    <option value={n} key={index}>
                      {n}
                    </option>
                  );
                })}
              </>
            ) : listing.Borough === "Brooklyn" ? (
              <>
                {brooklyn.map((n, index) => {
                  return (
                    <option value={n} key={index}>
                      {n}
                    </option>
                  );
                })}
              </>
            ) : listing.Borough === "Queens" ? (
              <>
                {queens.map((n, index) => {
                  return (
                    <option value={n} key={index}>
                      {n}
                    </option>
                  );
                })}
              </>
            ) : listing.Borough === "Staten Island" ? (
              <>
                {staten.map((n, index) => {
                  return (
                    <option value={n} key={index}>
                      {n}
                    </option>
                  );
                })}
              </>
            ) : null}
          </select>
          {/* {errorState["Neighbourhood"].length > 0 ? (
            <p className="error-msg">{errorState["Neighbourhood"]}</p>
          ) : null} */}
        </label>
        <label htmlFor="Room_type" className="form-label">
          <select
            id="Room_type"
            name="Room_type"
            value={listing.Room_type}
            onChange={changeHandler}
          >
            <option value="">Room Type</option>
            <option value="Entire home">Entire Home</option>
            <option value="Private room">Private Room</option>
            <option value="Shared room">Shared Room</option>
          </select>
          {/* {errorState["Room_type"].length > 0 ? (
            <p className="error-msg">{errorState["Room_type"]}</p>
          ) : null} */}
        </label>
        <label htmlFor="Availability_365" className="form-label">
          <input
            id="Availability_365"
            name="Availability_365"
            type="number"
            placeholder="Availability"
            value={listing.Availability_365}
            onChange={changeHandler}
            className="form-input"
          />
          {/* {errorState["Availability_365"].length > 0 ? (
            <p className="error-msg">{errorState["Availability_365"]}</p>
          ) : null} */}
        </label>
        <label htmlFor="Minimum_nights" className="form-label">
          <input
            id="Minimum_nights"
            name="Minimum_nights"
            type="number"
            placeholder="Minimum Nights"
            value={listing.Minimum_nights}
            onChange={changeHandler}
            className="form-input"
          />
          {/* {errorState["Minimum_nights"].length > 0 ? (
            <p className="error-msg">{errorState["Minimum_nights"]}</p>
          ) : null} */}
        </label>
        <button
          //   disabled={submitDisabled}
          type="submit"
          className="form-button"
          //   style={
          //     submitDisabled === false
          //       ? { color: "white", backgroundColor: "green" }
          //       : null
          //   }
        >
          Submit
        </button>
      </div>
      <div className="outputs">
        <p>Borough: {listing.Borough} </p>
        <p>Neighborhood: {listing.Neighbourhood} </p>
        <p>Room type: {listing.Room_type} </p>
        <p>Minimum Nights: {listing.Minimum_nights} </p>
        <p>Days Available: {listing.Availability_365} </p>

        <p>Your optimal price is:</p>
        <p style={{ color: "green", fontSize: "40px" }}>
          {props.price ? props.price["predicted_price "] : null}
        </p>
      </div>
    </form>
  );
}

export default ListingsForm;
