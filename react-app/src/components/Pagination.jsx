import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Pagination ({ count, total_pages, pageno, size }) {
  const navigate = useNavigate()
  if (!pageno) {
    pageno = 1
  }
  if (pageno > total_pages) {
    navigate('p/1')
  }
  console.log({ total_pages, pageno })
  return (
    <>
      <div className='flex-1 flex justify-between sm:hidden'>
        <Link
          to={`${pageno !== 1 ? `${`p/${parseInt(pageno) - 1}`}` : '#'}`}
          className='relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'
        >
          Previous
        </Link>
        <Link
          to={`${pageno !== 1 ? `${`p/${parseInt(pageno) - 1}`}` : '#'}`}
          className='ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'
        >
          Next
        </Link>
      </div>
      <div className='hidden sm:flex-1 sm:flex sm:items-center sm:justify-center'>
        <nav
          className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px'
          aria-label='Pagination'
        >
          <Link
            to={`${pageno !== '1' ? `${`p/${parseInt(pageno) - 1}`}` : '#'}`}
            className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
          >
            <span className='sr-only'>Previous</span>
            <svg
              className='h-5 w-5'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              aria-hidden='true'
            >
              <path
                fillRule='evenodd'
                d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                clipRule='evenodd'
              />
            </svg>
          </Link>
          {[...Array(total_pages)].map((x, i) => (
            <Link
              to={`${size ? `s/${size}/` : ''}p/${i + 1}`}
              key={i}
              aria-current='page'
              className={`z-10 ${
                i + 1 === parseInt(pageno)
                  ? 'bg-indigo-50 border-indigo-500 text-indigo-600'
                  : ''
              } relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
            >
              {i + 1}
            </Link>
          ))}
          <Link
            to={`${
              parseInt(pageno) !== total_pages
                ? `${`p/${parseInt(pageno) + 1}`}`
                : '#'
            }`}
            className='relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
          >
            <span className='sr-only'>Next</span>
            <svg
              className='h-5 w-5'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              aria-hidden='true'
            >
              <path
                fillRule='evenodd'
                d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                clipRule='evenodd'
              />
            </svg>
          </Link>
        </nav>
      </div>
    </>
  )
}
