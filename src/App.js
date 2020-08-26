import React, { useState, useEffect } from 'react';
import ListForm from './component/ListForm'
import * as yup from 'yup'
import './App.css'

const formSchema = yup.object().shape({
  'borough' : yup.string().required("Borough is required"),
  'neighborhood' : yup.string().required("Neighborhood is required"),
  'room_type' : yup.string().required("Room type is required"),
  'availability_365' : yup.number().typeError("Enter valid number").min(1,"Cannot be less than 1").max(365,"Cannot be more than 365"),
  'minimum_nights' : yup.number().typeError("Enter valid number").min(1,"Cannot be less than 1").max(365,"Cannot be more than 365")
})

const initialFormValues={
  'borough' : '',
  'neighborhood' : '',
  'room_type' : '',
  'availability_365' : 365,
  'minimum_nights' : 1
}
const initialErrorValues={
  'borough' : '',
  'neighborhood' : '',
  'room_type' : '',
  'availability_365' : '',
  'minimum_nights' : ''
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
    
    //convert string to number if form input type is number
    if(e.target.type === 'number'){
      setListingForm({...listingForm, [e.target.name] : parseInt(e.target.value)})
    }
    else{
    setListingForm({...listingForm, [e.target.name] : e.target.value})
      
    }
      
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
    <div className="container">
        <div className="app-container">
          <div className="header-container">
            <h2>Rental Price Calculator</h2>
         
           </div>
             <ListForm listingForm={listingForm} 
                submitDisabled={submitDisabled} 
                listings = {listings}
                errorState = {errorState}
                changeHandler={changeHandler} 
                submitHandler={submitHandler}/>
        </div>
    </div>
   
  );
}

export default App;
