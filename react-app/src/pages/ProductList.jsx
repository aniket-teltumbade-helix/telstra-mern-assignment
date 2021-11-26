import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function ProductList () {
  const [data, setdata] = useState()
  useEffect(() => {
    var config = {
      method: 'get',
      url: 'http://localhost:8989/products',
      headers: {}
    }

    axios(config)
      .then(function (response) {
        setdata(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])
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
