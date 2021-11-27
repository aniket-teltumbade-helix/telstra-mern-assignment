import React, { useState } from 'react'
import { useParams } from 'react-router'
import Card from '../components/Card'
import Checkbox from '../components/Checkbox'
import Pagination from '../components/Pagination'
import useProductTypes from '../hooks/useProductTypes'
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
        <td class='px-6 py-2 whitespace-nowrap'>
          <span class='px-4 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-500 text-white'>
            Active
          </span>
        </td>
      ) : (
        <td class='px-6 py-2 whitespace-nowrap'>
          <span class='px-4 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-500 text-white'>
            Inactive
          </span>
        </td>
      )
    ) : (
      el !== '_id' && (
        <td class='px-6 py-2 whitespace-nowrap text-sm text-gray-500'>
          {product[el]}
        </td>
      )
    )
  )
}

export default function SearchPage () {
  const { search, size, pageno } = useParams()
  const [value, setvalue] = useState({ active: false, inactive: false })
  const [productType, setProductType] = useState([])
  const types = useProductTypes()

  const data = useSearch(search, size, pageno, value, productType, types)

  const handleType = e => {
    if (productType.includes(e.target.name)) {
      setProductType(productType.filter(el => el !== e.target.name))
    } else {
      setProductType([...productType, e.target.name])
    }
  }

  return data.data ? (
    <>
      <div class='flex flex-wrap space-x-1 w-full'>
        <div class='item w-96 h-32'>
          <Card title='Product Types' handleClear={() => setProductType([])}>
            {types
              ? types.map(el => (
                  <Checkbox
                    label={el._id}
                    name={el._id}
                    status={productType.includes(el._id)}
                    handleChange={handleType}
                  />
                ))
              : 'loading'}
          </Card>
          <Card
            title='Maker Product Status'
            handleClear={() => setvalue({ active: false, inactive: false })}
          >
            <Checkbox
              label='Active'
              handleChange={() => setvalue({ ...value, active: !value.active })}
              status={value.active}
            />
            <Checkbox
              label='Inactive'
              handleChange={() =>
                setvalue({ ...value, inactive: !value.inactive })
              }
              status={value.inactive}
            />
          </Card>
        </div>
        <div class='item w-auto h-32 flex-grow'>
          <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
            <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
              <p className='text-base	font-semibold py-2'>
                Showing {data.data.count} results
              </p>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                  <tr>
                    <TableHead />
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>
                  {data.data.result.map(product => (
                    <tr>
                      <TableBody product={product} />
                    </tr>
                  ))}
                </tbody>
              </table>
              <Pagination
                count={data.data.count}
                total_pages={data.data.total_pages}
                pageno={pageno}
                search={search}
                size={size}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <h1>Loading</h1>
  )
}
