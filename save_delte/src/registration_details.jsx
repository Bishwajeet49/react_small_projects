import { useReducer } from "react";
import EditForm from "./editForm.jsx";
const initialState={
    name_form:false,
    age_form:false,
    email_form:false
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'show_name_form':
            return {...state,name_form:true};
        case 'show_age_form':
            return {...state,age_form:true};
        case 'show_email_form':
            return {...state,email_form:true};
        case 'hide_name_form':
            return {...state,name_form:false};
        case 'hide_age_form':
            return {...state,age_form:false};
        case 'hide_email_form':
            return {...state,email_form:false};
        default:
            return state;
    }
}
export default function Registration_details({data,deleteCB}){
   const [editingSates,dispatch]=useReducer(reducer,initialState);

    return(
        <div className="registration-card" key={data.id}>

        <div className="card-content">

        {editingSates.name_form 
        ?
            <EditForm inputType='text' currentData={data.name} 
            hideActionType='hide_name_form' dispatch={dispatch}
            attrName='name'
            recordId={data.id}
            />
        :
          <h3>
            {data.name}

            <span class="material-symbols-outlined edit-icon"
             onClick={()=>dispatch({type:'show_name_form'})}>
             edit
            </span>

          </h3>
     
        
        }
        <br />

        {editingSates.age_form 
        ?
            <EditForm inputType='number' currentData={data.age} 
            hideActionType='hide_age_form' dispatch={dispatch}
            attrName='age'
            recordId={data.id}
            />
        :
          <p>
            Age: {data.age}
            <span class="material-symbols-outlined  edit-icon"
            onClick={()=>dispatch({type:'show_age_form'})} >edit
            </span>
          </p>
        }

          <br />

        {editingSates.email_form 
        ?
            <EditForm inputType='email' currentData={data.email} 
            hideActionType='hide_email_form' dispatch={dispatch}
            attrName='email'
            recordId={data.id}
            />
        :
            <p>
              
              Email: {data.email}
              <span class="material-symbols-outlined  edit-icon"
               onClick={()=>dispatch({type:'show_email_form'})}>
               edit
             </span>
            </p>
        }
        </div>

        <button 
          className="delete-button"
          onClick={() => deleteCB(data.id)}
        >
         Delete <span class="material-symbols-outlined">delete</span>
        </button>

      </div>
    )
}