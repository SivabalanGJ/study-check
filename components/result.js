import React from 'react'
import "./result.css"
import { Button } from '@mui/material'

export const Result = ({temp,icon,desc,setTemp}) => {
  return (
    <div className="result">
        <div className="result_box">
            <h1>temp:{temp} &deg;C</h1>
            <p>{desc}</p>
            <img src={icon} alt="logo" /> <br/>
            <Button variant="contained" color='primary' onClick={()=>{setTemp("");}}>back</Button>
            </div>
    </div>
  )
}
