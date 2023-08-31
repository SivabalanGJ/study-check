import React from 'react';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import "./input.css"
const Map = ({input,setInput,findweather}) => {
  const handlechange=(event)=>{
    setInput(event.target.value)
  }
  const handleClick=(event)=>{
event.preventDefault();
findweather();
}
  
  //console.log(input);
  return (
    <div className="inputbox">
        <div className="inputbox_filed">
            <h1>Google Weather App</h1>
            <p>powered by</p>
            <img src="https://img.icons8.com/?size=512&id=V5cGWnc9R4xj&format=png" alt="google" /><br />
            <form><Input placeholder='enter your city' onChange={handlechange} value={input}/><br/>
            <Button variant="contained" color='primary' type='submit' onClick={handleClick}>Search</Button></form>
        </div>
    </div>
  )
}
export default Map;
