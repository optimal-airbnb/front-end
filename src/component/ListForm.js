import React from 'react'
import './ListForm.css'



function ListForm(props){
    const { listingForm, submitDisabled, listings, errorState, changeHandler, submitHandler } = props
    
    

    return(
         <form onSubmit={submitHandler}>
            <div className="inputs">
            <label htmlFor="location">
                 <input className="text"
                    id="location"
                    name="location"
                    type="text"
                    placeholder="Location"
                    value={listingForm.location}
                    onChange={changeHandler}
                    />
                  {
                    errorState.location.length>0? <p className="error-msg">{errorState.location}</p> : null
                  }
             </label>
             <label htmlFor="lengthStay">
                 <input className="text"
                    id="lengthStay"
                    name="lengthStay"
                    type="text"
                    placeholder="Length of Stay"
                    value={listingForm.lengthStay}
                    onChange={changeHandler}
                    />
                {
                    errorState.lengthStay.length>0? <p className="error-msg">{errorState.lengthStay}</p> : null
                }
             </label>
             <label htmlFor="bedrooms">Bedrooms
                 <input 
                    id="bedrooms"
                    name="bedrooms"
                    type="number"
                    
                    min = "1"
                    max="6"
                    value={listingForm.bedrooms}
                    onChange={changeHandler}
                    />
                    
                {
                    errorState.bedrooms.length>0? <p className="error-msg">{errorState.bedrooms}</p> : null
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
                    errorState.bathrooms.length>0? <p className="error-msg">{errorState.bathrooms}</p> : null
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
                        errorState.type.length>0? <p className="error-msg">{errorState.type}</p> : null
                    }
             </label>
             <button 
                disabled={submitDisabled} 
                type="submit"
                style= {submitDisabled===false?{color:"white", backgroundColor:"green"}:null}
                >Submit
                </button>
             <pre>{JSON.stringify(listings, null, 2)}</pre>

            </div>
             <div className="outputs">
                 <h4>Your optimal price </h4>
                 <p>YOu chose this location</p>
                 <p>YOu chose this length </p>
                 <p>YOu chose # bedrooms</p>
                 <p>YOu chose # bathrooms</p>
                 <p>YOu chose this type</p>
                 <p>Your optimal price is this</p>
             </div>
         </form>
    )
}

export default ListForm
                

