import React from 'react'

export default function Select ({ options, selected, handleSort }) {
  return (
    <label className='block text-left' style={{ minWidth: '100px' }}>
      <select
        className='form-select block w-full mt-1 p-1 mr-2'
        onChange={handleSort}
        value={selected}
      >
        <option defaultValue='default'>Sort</option>
        {options.map((el, id) => (
          <option key={id} defaultValue={el.name}>
            {el.name}
          </option>
        ))}
      </select>
    </label>
  )
}
