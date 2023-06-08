export const initialState = [];
/*
{
  name: "",
  age: "",
  email: "",
  id: ""
}
*/
export const reducer = (state, action) => {
  switch (action.type) {
    case "add_records":
      return [...state, action.payload];
    case "delete_record":
      return state.filter((record) => record.id !== action.payload);
    case "update":
      return updateAttribute(state,action)

    default:
      return state;
  }
};
function updateAttribute(state,action){
      //finding the current object by matching id
      let indexOfobjTobeUpdated;
      const objTobeUpdated =state.filter((record,index) =>{
        if( record.id === action.payload.id){
          indexOfobjTobeUpdated=index;
          return true;
        }  
        return false;
      })[0];

      const key=action.payload.attrName;

      const updatedObj={...objTobeUpdated,[key]:action.payload.newData};

      const currentObjArray=[...state];

      //updating the previous record with new record
      currentObjArray[indexOfobjTobeUpdated]=updatedObj;
      return currentObjArray;
}
