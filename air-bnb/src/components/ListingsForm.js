import React, { useState } from "react";
import { brooklyn, manhattan, queens, staten, bronx } from "../Data/Data";

import "../styles.css";

function ListingsForm(props) {
  const initialFormValues = {
    Borough: "",
    Neighbourhood: "",
    Room_type: "",
    Availability_365: "",
    Minimum_nights: "",
  };

  const [listing, setListing] = useState(initialFormValues);

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

  return (
    <form onSubmit={submitHandler}>
      <div className="inputs">
        <label htmlFor="Borough">
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
        </label>
        <label htmlFor="Neighbourhood">
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
                    <option value={n} id={index}>
                      {n}
                    </option>
                  );
                })}
              </>
            ) : listing.Borough === "Bronx" ? (
              <>
                {bronx.map((n, index) => {
                  return (
                    <option value={n} id={index}>
                      {n}
                    </option>
                  );
                })}
              </>
            ) : listing.Borough === "Brooklyn" ? (
              <>
                {brooklyn.map((n, index) => {
                  return (
                    <option value={n} id={index}>
                      {n}
                    </option>
                  );
                })}
              </>
            ) : listing.Borough === "Queens" ? (
              <>
                {queens.map((n, index) => {
                  return (
                    <option value={n} id={index}>
                      {n}
                    </option>
                  );
                })}
              </>
            ) : listing.Borough === "Staten Island" ? (
              <>
                {staten.map((n, index) => {
                  return (
                    <option value={n} id={index}>
                      {n}
                    </option>
                  );
                })}
              </>
            ) : null}
          </select>
        </label>
        <label htmlFor="Room_type">
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
        </label>
        <label htmlFor="Availability_365">
          <input
            id="Availability_365"
            name="Availability_365"
            type="number"
            placeholder="Availability"
            value={listing.Availability_365}
            onChange={changeHandler}
          />
        </label>
        <label htmlFor="Minimum_nights">
          <input
            id="Minimum_nights"
            name="Minimum_nights"
            type="number"
            placeholder="Minimum Nights"
            value={listing.Minimum_nights}
            onChange={changeHandler}
          />
        </label>
        <button type="submit">Submit</button>
        <pre>{JSON.stringify(listing, null, 2)}</pre>
      </div>
    </form>
  );
}

export default ListingsForm;
