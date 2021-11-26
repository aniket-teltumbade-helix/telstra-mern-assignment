import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import useSearch from '../hooks/useSearch'

function TableHead () {
  const header = [
    'Material Name',
    'Product Type',
    'Description',
    'Maker Product Status'
  ]
  return header.map(el => (
    <th
      scope='col'
      className='px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider'
    >
      {el}
    </th>
  ))
}
function TableBody ({ product }) {
  const productKeys = Object.keys(product)
  productKeys.map(el => console.log(typeof el, el))
  return productKeys.map(el =>
    typeof product[el] === 'boolean' && el !== '_id' ? (
      product[el] ? (
        <td class='px-6 py-4 whitespace-nowrap'>
          <span class='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
            Active
          </span>
        </td>
      ) : (
        <td class='px-6 py-4 whitespace-nowrap'>
          <span class='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800'>
            Inactive
          </span>
        </td>
      )
    ) : (
      el !== '_id' && (
        <td class='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
          {product[el]}
        </td>
      )
    )
  )
}

export default function SearchPage () {
  const { search } = useParams()
  const data = useSearch({ search })
  return data.data ? (
    <>
      <div className='flex flex-col'>
        <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
            <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                  <tr>
                    <TableHead />
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>
                  {data.data.map(product => (
                    <tr>
                      <TableBody product={product} />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <pre>{JSON.stringify(data.data, null, 2)}</pre>
    </>
  ) : (
    <h1>Loading</h1>
  )
}
