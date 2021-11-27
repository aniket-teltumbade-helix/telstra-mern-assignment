import React from 'react'

export default function Checkbox ({ status, handleChange, name, label }) {
  return (
    <label className='inline-flex items-center py-2'>
      <input
        type='checkbox'
        className='form-checkbox'
        checked={status}
        name={name}
        onChange={handleChange}
      />
      <span className='ml-2'>{label}</span>
    </label>
  )
}
