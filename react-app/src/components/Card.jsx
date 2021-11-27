import React from 'react'

export default function Card ({ children }) {
  return (
    <div class='max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20'>
      {children}
    </div>
  )
}
