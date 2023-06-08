import { useContext } from "react";
import RegistrationContext from "./Contexts/registrationContext";
import { useNavigate } from "react-router-dom";

import Registration_details from "./registration_details";
export default function Show() {
  const { registrationData, dispatch } = useContext(RegistrationContext);
  const navigate = useNavigate();
  console.log(registrationData);
  function deleteRecordHandler(recordId) {
    dispatch({ type: "delete_record", payload: recordId });
  }
  return (
    <div className="registration-list">
      {registrationData.length < 1 ? (
        <div className="no-data-msg">
          No records found
          <br />
          <button className="create-button" onClick={(e) => navigate("/save")}>
            Create Records <span class="material-symbols-outlined">edit</span>
          </button>
        </div>
      ) : (
        <h2>Registration List</h2>
      )}
      {registrationData.map((registration) => (
        <Registration_details 
        key={registration.id} 
        data={registration}
        deleteCB={deleteRecordHandler}
        />
      ))}
    </div>
  );
}
