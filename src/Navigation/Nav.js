
import React from 'react'
import { FaHeart ,FaUser , FaShoppingCart } from "react-icons/fa";





const Nav = ({handleInputChange}) => {
  return (
    <nav className='flex flex-col md:flex-row border-b justify-around items-center  p-4'>

<div>

<input type='text' onChange={handleInputChange}  className='bg-slate-200 p-2 outline-none  w-[15rem]'  placeholder='Search....' />

</div>



<div className='flex   mt-4 md:mt-0 '>

<a className='text-decoraton-none text-slate-500 me-3 text-xl' href='#'>
  <FaHeart />
</a>

<a className='text-decoraton-none text-slate-500 me-3 text-xl' href='#'>
  <FaUser />
</a>



<a  className='text-decoraton-none text-slate-500 me-3 text-xl' href='#'>
  <FaShoppingCart />
</a>




</div>

      
        
    </nav>
  )
}

export default Nav