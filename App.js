import React ,{useState}from 'react'
import Map from './components/input';
import "./index.css";
import axios from "axios"
import { Result } from './components/result';


function Weather(){
  const [input, setInput]=useState("");
  const [temp, setTemp]=useState("");
  const [description, setDescription]=useState("");
  const [icon, setIcon]=useState("");
  const findweather=async()=>{
    const apiKey="1c461a66cf74feccf0583e2e8cdf9e65";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`;
    const response= await axios.get(url);
    //console.log(response);
    const temp=response.data.main.temp;
    const weatherDescription=response.data.weather[0].description;
    const icon=response.data.weather[0].icon;
    const imagurl="http://openweathermap.org/img/wn/" + icon +"@2x.png";
    setTemp(temp);
    setDescription(weatherDescription);
    setIcon(imagurl);
    setInput("")
  }
  return(
    <div className='api'>
      {temp==="" ?(
      <Map input={input} setInput={setInput} findweather={findweather}/>
      ):(
      <Result temp={temp} desc={description} icon={icon} setTemp={setTemp}/>)}
      
  
      
      </div>
  )
}
export default Weather;