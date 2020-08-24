import React from 'react'
import './ListForm.css'

function ListForm(props){
    const { listingForm, submitDisabled, listings, errorState, changeHandler, submitHandler } = props

    return(
         <form onSubmit={submitHandler}>
             <label htmlFor="location">Location 
                 <input 
                    id="location"
                    name="location"
                    type="text"
                    value={listingForm.location}
                    onChange={changeHandler}
                    />
                  {
                    errorState.location.length>0? <p>{errorState.location}</p> : null
                  }
             </label>
             <label htmlFor="lengthStay">Length of Stay 
                 <input 
                    id="lengthStay"
                    name="lengthStay"
                    type="text"
                    value={listingForm.lengthStay}
                    onChange={changeHandler}
                    />
                {
                    errorState.lengthStay.length>0? <p>{errorState.lengthStay}</p> : null
                }
             </label>
             <label htmlFor="bedrooms">Bedrooms 
                 <input 
                    id="bedrooms"
                    name="bedrooms"
                    type="number"
                    min="1"
                    max="5"
                    value={listingForm.bedrooms}
                    onChange={changeHandler}
                    />
                {
                    errorState.bedrooms.length>0? <p>{errorState.bedrooms}</p> : null
                }
             </label>
             <label htmlFor="bathrooms">Bathrooms 
                 <input 
                    id="bathrooms"
                    name="bathrooms"
                    type="number"
                    min="1"
                    max="5"
                    value={listingForm.bathrooms}
                    onChange={changeHandler}
                    />
                {
                    errorState.bathrooms.length>0? <p>{errorState.bathrooms}</p> : null
                }
             </label>
             <label htmlFor="type">Type
                 <select
                    id="type"
                    name="type"
                    value={listingForm.type}
                    onChange={changeHandler}
                    >
                  <option value="">Select Type</option>
                  <option value="entire place">Entire Place</option>
                  <option value="private room">Private Room</option>
                  <option value="shared room">Shared Room</option>
                </select>
                 
                
                    {
                        errorState.type.length>0? <p>{errorState.type}</p> : null
                    }
             </label>
             <button disabled={submitDisabled} type="submit">Submit</button>
             <pre>{JSON.stringify(listings, null, 2)}</pre>
         </form>
    )
}

export default ListForm

