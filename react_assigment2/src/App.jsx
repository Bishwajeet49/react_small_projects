import UserCard from "./userCard";
import "./index.css";
import { useReducer, useEffect, useState } from "react";
import ShimmerUI from "./shimmerUI";
function reducer(state, action) {
  switch (action.type) {
    case "add":
       state.pop();//removing last added shimmer card
      return [...state,action.payload];
    case "add_shimmer_card":
      return [...state,action.payload];
    default:
      return state;
  }
}

const initialState =[]
function App() {
  const [userData, dispatch] = useReducer(reducer, initialState);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserData();
    // fetchUserData();
  }, []);

  function fetchUserData() {
    setLoading(true);
    //mimicing one extra card
    dispatch({ type: "add_shimmer_card", payload: {} });
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => {
        const userData = data.results[0];
        // Once the data is fetched, set the loading state back to false
        setLoading(false);
        // Update the component's data state with the fetched data
        const record = {
          name: userData.name.first + " " + userData.name.last,
          age: userData.dob.age,
          gender: userData.gender,
          country: userData.location.country,
          image_url: userData.picture.large
        };

        dispatch({ type: "add", payload: record  });
      })
      .catch((error) => {
        // Handle any errors that occurred during the API request
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }
  {console.log(userData.length-1)}
  return (
    <div class="container">
    <div className="card-container">
 
     { userData.map(
        (data,index)=>{
         if(isLoading&& index===userData.length-1){
          return (<ShimmerUI key={index}/>)
         }
          return (<UserCard  key={index} userData={data}/>)
          
        }
      )
      }
    </div>
      <button
        className="fetch-another-btn"
        onClick={() => {
          fetchUserData();
        }}
      >
        Fetch Another
      </button>
    </div>
  );
}

export default App;
