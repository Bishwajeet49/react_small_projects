import { useState, useContext, useEffect } from "react";
import RegistrationContext from "./Contexts/registrationContext";

export default function Save() {
  return (
    <div className="formBox">
      <Form />
    </div>
  );
}

function Form() {
  const { dispatch } = useContext(RegistrationContext);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    id: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    age: "",
    email: ""
  });

  const [modelBoxState, setModelBoxState] = useState(false);

  const hideModelBox = () => {
    console.log("modelBox hided");
    setModelBoxState(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameRegex = /^[a-zA-Z ]+$/;
    const ageRegex = /^\d+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let formValid = true;
    const newErrors = {};

    if (!formData.name || !nameRegex.test(formData.name)) {
      formValid = false;
      newErrors.name = "Please enter a valid name";
    }

    if (
      !formData.age ||
      !ageRegex.test(formData.age) ||
      formData.age < 4 ||
      formData.age > 125
    ) {
      formValid = false;
      newErrors.age = "Please enter a valid age (between 4 and 125)";
    }

    if (!formData.email || !emailRegex.test(formData.email)) {
      formValid = false;
      newErrors.email = "Please enter a valid email";
    }

    if (formValid) {
      // Form is valid, add the data to the global context
      setModelBoxState(true);
      dispatch({
        type: "add_records",
        payload: { ...formData, id: Date.now() }
      });

      // console.log("Form submitted:", formData);
      setFormData({
        name: "",
        age: "",
        email: "",
        id: ""
      });
      setErrors({
        name: "",
        age: "",
        email: ""
      });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="form-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? "error" : ""}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>
        <div className="form-field">
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className={errors.age ? "error" : ""}
          />
          {errors.age && <span className="error-message">{errors.age}</span>}
        </div>
        <div className="form-field">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "error" : ""}
          />
          {errors.email && (
            <span className="error-message">{errors.email}</span>
          )}
        </div>
        <div className="form-field">
          <button type="submit">Submit</button>
        </div>
      </form>
      {modelBoxState && <ModelBox hideFunc={hideModelBox} />}
    </div>
  );
}

function ModelBox({ hideFunc }) {
  // the use effect will be executed only once when the ModelBox Component Mountend on the page due
  // when user will add the record sucessfully and it will perform a sideEffect of setTimeOut
  useEffect(() => {
    console.log("useEffect called");
    const id = setTimeout(() => {
      hideFunc();
    }, 2000);

    const id2 = setTimeout(() => {
      document.querySelector(".Sucessmsg").classList.add("bring-msg-up");
    }, 0);

    return () => {
      clearInterval(id);
      clearInterval(id2);
    };
  }, []);

  return (
    <div className="record-sucess-msg Sucessmsg">
      &#10003; &nbsp;Record Creadted Succcessfully
    </div>
  );
}
