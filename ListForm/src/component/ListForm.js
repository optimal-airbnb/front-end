import React from 'react'

function ListForm(props){
    const { listingForm, submitDisabled, changeHandler, submitHandler } = props

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
             </label>
             <label htmlFor="lengthStay">Length of Stay 
                 <input 
                    id="lengthStay"
                    name="lengthStay"
                    type="text"
                    value={listingForm.lengthStay}
                    onChange={changeHandler}
                    />
             </label>
             <label htmlFor="bedrooms">Bedrooms 
                 <input 
                    id="bedrooms"
                    name="bedrooms"
                    type="text"
                    value={listingForm.bedrooms}
                    onChange={changeHandler}
                    />
             </label>
             <label htmlFor="bathrooms">Bathrooms 
                 <input 
                    id="bathrooms"
                    name="bathrooms"
                    type="text"
                    value={listingForm.bathrooms}
                    onChange={changeHandler}
                    />
             </label>
             <label htmlFor="type">Type
                 <input 
                    id="type"
                    name="type"
                    type="text"
                    value={listingForm.type}
                    onChange={changeHandler}
                    />
             </label>
             <button disabled={submitDisabled} type="submit">Submit</button>
         </form>
    )
}

export default ListForm

