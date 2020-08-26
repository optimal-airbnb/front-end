import React, { useState } from "react";
import "../styles.css";
// import formSchema from "./ListingsFormSchema";

function ListingsForm(props) {
  const initialFormValues = {
    borough: "",
    neighborhood: "",
    room_type: "",
    availability_365: "",
    minimum_nights: "",
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
        <label htmlFor="borough">
          <select
            id="borough"
            name="borough"
            value={listing.borough}
            onChange={changeHandler}
          >
            <option value="">Borough</option>
            <option value="the bronx">The Bronx</option>
            <option value="manhattan">Manhattan</option>
            <option value="brooklyn">Brooklyn</option>
            <option value="queens">Queens</option>
            <option value="staten island">Staten Island</option>
          </select>
        </label>
        <label htmlFor="neighborhood">
          <input
            className="text"
            id="neighborhood"
            name="neighborhood"
            type="text"
            placeholder="Neighborhood"
            value={listing.neighborhood}
            onChange={changeHandler}
          />
        </label>
        <label htmlFor="room_type">
          <select
            id="room_type"
            name="room_type"
            value={listing.room_type}
            onChange={changeHandler}
          >
            <option value="">Room Type</option>
            <option value="entire place">Entire Place</option>
            <option value="private room">Private Room</option>
            <option value="shared room">Shared Room</option>
          </select>
        </label>
        <label htmlFor="availability_365">
          <input
            id="availability_365"
            name="availability_365"
            type="number"
            placeholder="Availability"
            value={listing.availability_365}
            onChange={changeHandler}
          />
        </label>
        <label htmlFor="minimum_nights">
          <input
            id="minimum_nights"
            name="minimum_nights"
            type="number"
            placeholder="Minimum Nights"
            value={listing.minimum_nights}
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
