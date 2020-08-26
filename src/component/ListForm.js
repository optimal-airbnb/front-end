import React, {useState} from 'react'
import './ListForm.css'
import nData from '../Data/nData'



function ListForm(props){
    const { listingForm, submitDisabled, listings, errorState, changeHandler, submitHandler } = props
    //array of neighborhoods
    const [nArray, setNArray ] = useState(nData)


    return(
         <form onSubmit={submitHandler}>
            <div className="inputs">
            <label htmlFor="borough">Borough
               
               <select
                    id="borough"
                    name="borough"
                    value={listingForm['borough']}
                    onChange={changeHandler}
                    >
                  <option value="">Select one</option>
                  <option value="Bronx">Bronx</option>
                  <option value="Manhattan">Manhattan</option>
                  <option value="Brooklyn">Brooklyn</option>
                  <option value="Queens">Queens</option>
                  <option value="Staten Island">Staten Island</option>
               </select>
                  {
                    errorState['borough'].length>0? <p className="error-msg">{errorState['borough']}</p> : null
                  }
             </label>
             <label htmlFor="neighborhood">Neighborhood
               <select
                    id="neighborhood"
                    name="neighborhood"
                    value={listingForm['neighborhood']}
                    onChange={changeHandler}
                    >
                  <option value="">Select one</option>
                  {
                      nArray.map((n)=>{
                          return <option value={n}>{n}</option>
                      })
                  }
               </select>

                {/* way to render neighborhood by borough if needed*/}
                  {/* {  
                      listingForm['borough']==='Manhattan'?(
                        <>
                        <option value="Mneighbor#1">Mneighbor#1</option>
                        <option value="Mneighbor#2">Mneighbor#2</option>
                        </>) 
                        :
                        listingForm['borough']==='Bronx'?(
                            <>
                            <option value="Bneighbor#1">Bneighbor#1</option>
                            <option value="Bneighbor#2">Bneighbor#2</option>
                            </>) 
                            :
                        listingForm['borough']==='Brooklyn'?(
                            <>
                            <option value="Brookneighbor#1">Brookneighbor#1</option>
                            <option value="Brookneighbor#2">Brookneighbor#2</option>
                            </>) 
                            :
                        listingForm['borough']==='Queens'?(
                            <>
                            <option value="Qneighbor#1">Qneighbor#1</option>
                            <option value="Qneighbor#2">Qneighbor#2</option>
                            </>) 
                            :
                            
                                <>
                                <option value="SIneighbor#1">SIneighbor#1</option>
                                <option value="SIneighbor#2">SIneighbor#2</option>
                                </>
                        
                  } */}
                {
                    errorState['neighborhood'].length>0? <p className="error-msg">{errorState['neighborhood']}</p> : null
                }
                        
                        

                        
                       


                      
                  
                  
             </label>
             <label htmlFor="room_type">room_type
                 <select
                    id="room_type"
                    name="room_type"
                    value={listingForm['room_type']}
                    onChange={changeHandler}
                    >
                  <option value="">Select room_type</option>
                  <option value="entire place">Entire Place</option>
                  <option value="private room">Private Room</option>
                  <option value="shared room">Shared Room</option>
                </select>
                 
                
                    {
                        errorState['room_type'].length>0? <p className="error-msg">{errorState['room_type']}</p> : null
                    }
             </label>
             <label htmlFor="availability_365">availability_365
                 <input 
                    id="availability_365"
                    name="availability_365"
                    type="number"
                    
                    min = "1"
                    max="365"
                    value={listingForm['availability_365']}
                    onChange={changeHandler}
                    />
                    
                {
                    errorState['availability_365'].length>0? <p className="error-msg">{errorState['availability_365']}</p> : null
                }
             </label>
             <label htmlFor="minimum_nights">minimum_nights 
                 <input 
                    id="minimum_nights"
                    name="minimum_nights"
                    type="number"
                    min="1"
                    max="365"
                    value={listingForm['minimum_nights']}
                    
                    onChange={changeHandler}
                    />
                {
                    errorState['minimum_nights'].length>0? <p className="error-msg">{errorState['minimum_nights']}</p> : null
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
                 
                 <p>Your optimal price is this</p>
             </div>
         </form>
    )
}

export default ListForm
                

