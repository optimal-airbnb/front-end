import React, { useState, useEffect } from 'react';
import ListForm from './component/ListForm'
import * as yup from 'yup'
import './App.css'

const formSchema = yup.object().shape({
  location: yup.string().required("Location is a required field"),
  lengthStay: yup.string().required("Length of stay is a required field"),
  bedrooms: yup.string(),
  bathrooms: yup.string(),
  type: yup.string().required("Type is a required field")
})

const initialFormValues={
    location : "",
    lengthStay : "",
    bedrooms : "",
    bathrooms : "",
    type : ""
}
const initialErrorValues={
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
  const[ errorState, setErrorState ] = useState(initialErrorValues)
  //sumbit button is turned off until form is validated
  const[ submitDisabled, setSubmitDisabled ] = useState(true)
  
  //handles input
  function changeHandler(e){
    e.persist()
    validate(e)
    setListingForm({...listingForm, [e.target.name] : e.target.value})
  }
  
  //handles submit to an array for now
  function submitHandler(e){
    e.preventDefault()
    let tempListings = [...listings]
    tempListings = [...tempListings, listingForm]
    setListings(tempListings)
    setListingForm(initialFormValues)
    setErrorState(initialErrorValues)
  }
  
  //checks input with yup
  function validate(e){
    yup
    .reach(formSchema, e.target.name)
    .validate(e.target.value)
    .then(valid=> {
      setErrorState({...errorState, [e.target.name]: ""})
    })
    .catch(err=> {
      setErrorState({...errorState, [e.target.name]: err.errors[0]})
    })
  }

  //validate form when it changes. enable submit button when valid
  useEffect(()=>{
    formSchema.isValid(listingForm)
    .then(valid => {
      setSubmitDisabled(!valid)
    })
  },[listingForm])


  
  return (
    <>
      <h2>Listing Information</h2>
      <ListForm listingForm={listingForm} 
                submitDisabled={submitDisabled} 
                listings = {listings}
                errorState = {errorState}
                changeHandler={changeHandler} 
                submitHandler={submitHandler}/>
    </>
  );
}

export default App;
