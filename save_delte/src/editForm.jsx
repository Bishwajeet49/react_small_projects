import { useState,useContext } from "react";
import RegistrationConext from "./Contexts/registrationContext";
export default function EditForm(props){
    const { inputType,
            hideActionType,
            dispatch,currentData, 
            attrName,recordId}=props;

    const {dispatch:dispatchToRegisContext}=useContext(RegistrationConext);
    const [value,setValue]=useState(currentData);
    function handleFormSubmit(e){
        
        e.preventDefault();
        //validate the input value
       
        dispatch({type:hideActionType});
        dispatchToRegisContext(
            {
                type:'update',
                payload:{
                          id:recordId,
                          newData:value,
                          attrName:attrName
                        }
            }   
        )

    }
return(
    <>
    <form onSubmit={handleFormSubmit}>
          { inputType==='text' 
              && 
            <input className='editInputField' type="text" 
              value={value}
              onChange={e=>setValue(e.target.value)} />
          }

          { inputType==='number' 
              && 
            <input className='editInputField' type="number" 
              value={value}
              onChange={e=>setValue(e.target.value)} />
          }

          { inputType==='email' 
              && 
            <input className='editInputField' type="email" 
              value={value}
              onChange={e=>setValue(e.target.value)} />
          }
    </form>
    </>
        
    
)
}

