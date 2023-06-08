import UserCard from "./userCard";
import "./index.css";
import ShimmerUI from "./shimmerUI";
import { useReducer, useEffect, useState } from "react";
function reducer(state, action) {
  switch (action.type) {
    case "change_user_data":
      return action.payload;
    default:
      return state;
  }
}

const initialState = {
  name: "rahul",
  age: null,
  gender: "",
  country: "",
  image_url: ""
};

function App() {
  const [userData, dispatch] = useReducer(reducer, initialState);
  const [isLoading, setLoading] = useState(true);
  const [timerId,setTimerId]=useState(null);
  const [seconds,setSeconds]=useState(5);
  const [displayTimerId,setDisplayTimerId]=useState(null);
  const [resStart,setRestart]=useState(false);

  useEffect(() => {
    if(resStart==='stop')
    return;
    fetchUserData();

    const timerId=setInterval(()=>{ 
      fetchUserData();
    },5000);
    setTimerId(timerId);

    const displaytimerId=setInterval(()=>{
      setSeconds(
        (prevSeconds) => {
          if (prevSeconds === 1) {
            return 5;
          } else {
            return prevSeconds - 1;
          }
        });
      }
    ,1000)

    setDisplayTimerId(displaytimerId);


    console.log('starting timer'+timerId)
    console.log('starting display timer'+displaytimerId)

    return(
      ()=>{
        //cleearing the timers on component unMount
      console.log('clearing fecth timer'+timerId);
      clearInterval(timerId);

      console.log('clearing display timer'+displaytimerId);
      clearInterval(displaytimerId);

      }
    )
  }, [resStart]);


  

  function fetchUserData() {
    setLoading(true);
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => {
        const userData = data.results[0];
        // Once the data is fetched, set the loading state back to false
        setLoading(false);
        // Update the component's data state with the fetched data
        const initialState = {
          firstName: userData.name.first,
          lastName: userData.name.last,
          gender: userData.gender,
          email: userData.email,
          dob: userData.dob.date.substring(0,10),
          age: userData.dob.age,
          phone: userData.phone,
          cell: userData.cell,
          streetNo: userData.location.street.number,
          streetName: userData.location.street.name,
          city: userData.location.city,
          state: userData.location.state,
          country: userData.location.country,
          postcode: userData.location.postcode,
          photoUrl: userData.picture.large,
        };

        dispatch({ type: "change_user_data", payload: initialState });
      })
      .catch((error) => {
        // Handle any errors that occurred during the API request
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }



  function stopHandler(){
  
      console.log('clearing timer'+timerId);
      console.log('clearing timer'+displayTimerId);
      setSeconds('stoped..')
      setRestart('stop');
      clearInterval(timerId);
      clearTimeout(displayTimerId);

  }

  function restartHandler(){

      setRestart(true);
      setSeconds(5);
    
  }
  return (
    <div class="container">
    <h2 style={{color:'#fff'}}>{seconds} {!isNaN(seconds)&& 'Sec.'}</h2> 
    <h3  style={{color:'#fff'}}>
    {!isNaN(seconds)&& 
    'to fetch another record'}</h3>
    {isLoading && <ShimmerUI/>}

    {!isLoading && <UserCard  userData={userData} />}


    {!isNaN(seconds)?
    
    (
      <button style={{backgroundColor:'red'}}
          className="fetch-another-btn"
          onClick={stopHandler}
      >
       Stop Fetching data
    </button>
    )
    
    :
    (
      <button 
          className="fetch-another-btn"
          onClick={restartHandler}
      >
      Restart fetching data
    </button>
    )
    
    }
    </div>
  );
}

export default App;
