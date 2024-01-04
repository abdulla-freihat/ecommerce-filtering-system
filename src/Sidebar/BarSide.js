import React from 'react'
import Category from './Category'
import Colors from './Colors'
import Price   from './Price'

const BarSide = ({handleChange  }) => {


  return (
    <div className='  w-[80%] md:max-w-[300px]  h-screen  border-r flex flex-col px-5'>

      
    <div className='border p-3 mt-5 px-5 '>
        <Category handleChange={handleChange} />
        <Price   handleChange={handleChange} />
        <Colors  handleChange={handleChange} />

        </div>

    </div>
  )
}

export default BarSide