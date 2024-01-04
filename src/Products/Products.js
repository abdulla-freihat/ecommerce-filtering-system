import React from 'react'
import Card from '../components/Card';

const Products = ({result}) => {
  return (
    <section className='flex flex-wrap     items-center   mt-1 '>
      {result}
    </section>
  )
}

export default Products