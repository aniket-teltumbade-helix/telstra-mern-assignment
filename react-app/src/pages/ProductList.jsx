import React from 'react'
import { Link } from 'react-router-dom'
import useProductTypes from '../hooks/useProductTypes'

export default function ProductList () {
  const data = useProductTypes()
  return data ? (
    <>
      <div className='container'>
        <p className='text-2xl font-black	'>Browse By Product Type</p>
        <div className='grid grid-flow-col grid-cols-4 auto-cols-max gap-x-5'>
          {data.map(el => (
            <Link to={`search/${el._id}`}>
              <div
                key={el._id}
                className='max-w-sm rounded overflow-hidden shadow-lg py-20 text-center'
              >
                {el._id}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  ) : (
    <h1>Loading</h1>
  )
}
