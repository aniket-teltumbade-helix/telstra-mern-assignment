import React from 'react'

export default function Select ({ options, selected, handleSort }) {
  return (
    <label className='block text-left' style={{ minWidth: '100px' }}>
      <select
        className='form-select block w-full mt-1 p-1 mr-2'
        onChange={handleSort}
      >
        <option>Sort</option>
        {options.map(el => (
          <option defaultValue={el.value} selected={selected === el.name}>
            {el.name}
          </option>
        ))}
      </select>
    </label>
  )
}
