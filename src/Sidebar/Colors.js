import React from 'react'
import Input from '../components/input'

const Colors = ({handleChange}) => {
  return (
    <div>


<h2 className='text-lg font-bold mt-5 mb-2'>Colors</h2>

<div>


 <Input
   handleChange={handleChange}
   value="black"
   title="Black"
   name="test1"
   color="black"
  />

<Input
   handleChange={handleChange}
   value="white"
   title="White"
   name="test1"
   color="white"
  />


<Input
   handleChange={handleChange}
   value="green"
   title="Green"
   name="test1"
   color="green"

  />



<Input
   handleChange={handleChange}
   value="red"
   title="Red"
   name="test1"
   color="red"
  />


<Input
   handleChange={handleChange}
   value="blue"
   title="Blue"
   name="test1"
   color="blue"
  />


 </div>
 
    </div>
  )
}

export default Colors