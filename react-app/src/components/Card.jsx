import React from 'react'

export default function Card ({ children, title, handleClear }) {
  return (
    <div class='max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20'>
      <div className='flex items-center justify-between'>
        <p>{title}</p>
        <button onClick={handleClear}>Clear</button>
      </div>
      <div className='flex flex-col'>{children}</div>
    </div>
  )
}
