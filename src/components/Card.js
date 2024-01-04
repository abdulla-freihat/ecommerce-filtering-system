import React from 'react'
import { AiFillStar } from "react-icons/ai";


const Card = ({img , title , star , prevPrice , newPrice , category }) => {
  return (
    <div className='border m-4 p-4 cursor-pointer h-[250px]  w-[100%] md:w-auto '>

<div className='flex justify-center items-center'>
    <img src={img} className='w-[7rem] md:w-[10rem] h-[6rem]'   />

    </div>

    <div>
      <h3 className='mt-2 font-bold'>{title}</h3>
      <p>{category}</p>
      <div className='flex text-yellow-500 mt-2'>
      {star} {star} {star} {star} {star}
      </div>

      <div className=' mt-2'>
          
            <del className='me-2'>{prevPrice}</del>
           {newPrice}
           
      </div>
    </div>
</div>
  )
}

export default Card