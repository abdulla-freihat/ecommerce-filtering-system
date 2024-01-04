import React from 'react'
import Input from '../components/input'

const Price = ({handleChange}) => {
  return (
    <div>

<h2 className='text-lg font-bold mt-5 mb-2'>Price</h2>

<div>
<Input  
  handleChange={handleChange}
  value={50}
  title="$0 - $50"
  name="test2"
/>

<Input  
  handleChange={handleChange}
  value={100}
  title="$50 - $100"
  name="test2"
/>


<Input  
  handleChange={handleChange}
  value={150}
  title="$100 - $150"
  name="test2"
/>


<Input  
  handleChange={handleChange}
  value={200}
  title="Over $150"
  name="test2"
/>

</div>
    </div>
  )
}

export default Price