import React, { useState } from 'react';
import ListForm from './component/ListForm'
import * as yup from 'yup'

const initialFormValues={
    location : "",
    lengthStay : "",
    bedrooms : "",
    bathrooms : "",
    type : ""
}

function App() {
  //contains array of listing objects
  const [ listings, setListings ] = useState([])
  //contains listing form object
  const [ listingForm, setListingForm] = useState(initialFormValues)
  //Error messages failing yup schema
  const[errorState, setErrorState] = useState(initialFormValues)

  function changeHandler(e){
      setListingForm({...listingForm, [e.target.name] : e.target.value})
  }
  
  return (
    <div>
      <ListForm listingForm={listingForm} changeHandler={changeHandler}/>
    </div>
  );
}

export default App;
