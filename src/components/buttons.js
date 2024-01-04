import React from 'react'

const Buttons = ({handleClick , value , title}) => {
  return (
   <button className='border bg-transparent p-2 font-bold ' onClick={handleClick} value={value}>{title}</button>
  )
}

export default Buttons