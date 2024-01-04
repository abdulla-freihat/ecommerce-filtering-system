import React from 'react'
import { useState } from 'react';


const Input = ({handleChange , value , title , name , color}) => {





  
  return (
    <div className='my-1' >
    <input onChange={handleChange} type="radio"   value={value} name={name}   />
 
      <label    className='m-2'>{title}</label>
    </div>
  )
}

export default Input