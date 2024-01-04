import React from 'react'
import Buttons from '../components/buttons'

const Recommended = ({handleClick}) => {
  return (
    <div className=''>

            <h2 className=' ml-5 mt-5 font-bold'>Recommended</h2>
            <div className='flex ml-5 flex-wrap gap-2 mt-2'>
              <Buttons   handleClick = {handleClick} value="" title="All Products"   />
              <Buttons  handleClick = {handleClick} value="Adidas" title="Adidas"/>
              <Buttons  handleClick = {handleClick} value="Nike" title="Nike"/>
              <Buttons  handleClick = {handleClick} value="Puma" title="Puma"/>
              <Buttons  handleClick = {handleClick} value="Vans" title="Vans"/>
                
            </div>
    </div>
  )
}

export default Recommended