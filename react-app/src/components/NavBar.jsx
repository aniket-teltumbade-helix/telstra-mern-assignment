import React, { useState } from 'react'
import { SearchIcon } from '@heroicons/react/outline'
import { useNavigate } from 'react-router'

export default function NavBar () {
  const [search, setsearch] = useState()
  const navigate = useNavigate()
  const handleChange = e => {
    setsearch(e.target.value)
  }
  const handleSearch = () => {
    if (search) {
      navigate(`/search/${search}`)
    }
  }
  return (
    <div className='flex items-center justify-start p-5'>
      <img
        src='https://via.placeholder.com/60'
        alt='...'
        className='shadow-lg rounded max-w-full h-auto align-middle border-none m-2'
      />
      <div className='flex border-2 rounded'>
        <input
          type='text'
          className='px-4 py-2 w-80'
          placeholder='Search...'
          onChange={handleChange}
        />
        <button
          className='flex items-center justify-center px-4 border-l'
          onClick={handleSearch}
        >
          <SearchIcon width='24' height='24' />
        </button>
      </div>
    </div>
  )
}
