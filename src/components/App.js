
import React from "react";
import { useState } from "react";
import './../styles/App.css';

const App = () => {

  //crating 3 useState() for city, temparature and weather.
  let[city,setCity]=useState(null);
  let[temp,setTemp]=useState(25);
  let[weather,setWeather]=useState("Sunny");

  console.log("city",city);
  console.log("temp",temp);
  console.log("weather",weather)
  // function when use click on the submit button.
  // const fetchApi=async=()=>
  // {
  //   // e.preventDefault();
  //   // console.log("in handlesubmit function");
  //   const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=4ebb9418ca605fa1931880e565ec065c`
  //   const response = await fetch(url);
  //   const resJson= await response.json();   
  //   setCity(resJson.main) 
  // }

  // const fetchApi = async(e) =>
  // {
  //   e.preventDefault();
  //   console.log("in fetchApi")
  //     const url =`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=4ebb9418ca605fa1931880e565ec065c`;
  //     const response = await fetch(url);
  //     const resJson = await response.json();
  //     setCity(resJson.main);
  // }

    function handleSubmit(e)
  {
    e.preventDefault();
    console.log('in handle submit')
    const url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=4ebb9418ca605fa1931880e565ec065c`;
    // const response = await fetch(url);
    // const resJson = await response.json();
    // console.log(resJson);

    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
      
      setTemp(Math.round(data.main.temp))
      setWeather(data.weather[0].main)

      console.log(data)      
    })
    .catch((err)=>console.log(err))

    setCity("")
  }

  return (
    <div>
        
        <form onSubmit={handleSubmit}>
            <label htmlFor="city">Enter City Name</label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e)=>setCity(e.target.value)}
            />

            <button>Submit</button>
        </form>


        {
          
         temp && temp>20 &&
         ( <div>
           <p></p> <span style={{color:"red"}}>Temparature: {temp}</span>
            <span style={{color:"red"}}>Conditions: "{weather}"</span>
            </div>
          )
}
  {
          temp && temp<=20 &&
          (
            
            <div>
              <p></p>
              <span style={{color:"blue"}}>Temparature: {temp}</span>
            <span style={{color:"blue"}}>Conditions: "{weather}"</span>
            </div>
             

          )
        }

        
    </div>
  )
}

export default App
