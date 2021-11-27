import React from 'react'
import useProductTypes from '../hooks/useProductTypes'

export default function ProductList () {
  const data = useProductTypes()
  return data ? (
    <>
      <div className='container'>
        <p className='text-2xl font-black	'>Browse By Product Type</p>
        <div className='grid grid-flow-col grid-cols-4 auto-cols-max gap-x-5'>
          {data.map(el => (
            <div class='max-w-sm rounded overflow-hidden shadow-lg py-20 text-center'>
              {el._id}
            </div>
          ))}
        </div>
      </div>
    </>
  ) : (
    <h1>Loading</h1>
  )
}
