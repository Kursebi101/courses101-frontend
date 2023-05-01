import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminNav = () => {
  return (
    <div className='flex flex-row items-center px-4 mt-2 gap-4'>
      <NavLink to={'/panel/'}>
        {({ active }) => (
          <div className={`p-2 rounded shadow-md hover:shadow-indigo-300 ${active ? 'shadow-indigo-300' : ''} duration-300`}>
            კურსების მართვა
          </div>
        )}
      </NavLink>
      <NavLink to={'/panel/categories'}>
        {({ active }) => (
          <div className={`p-2 rounded shadow-md hover:shadow-indigo-300 ${active ? 'shadow-indigo-300' : ''} duration-300`}>
            კატეგორიების მართვა
          </div>
        )}
      </NavLink>
      <NavLink to={'/panel/roles'}>
        {({ active }) => (
          <div className={`p-2 rounded shadow-md hover:shadow-indigo-300 ${active ? 'shadow-indigo-300' : ''} duration-300`}>
            როლების მართვა
          </div>
        )}
      </NavLink>
      <NavLink to={'/panel/academies'}>
        {({ active }) => (
          <div className={`p-2 rounded shadow-md hover:shadow-indigo-300 ${active ? 'shadow-indigo-300' : ''} duration-300`}>
            აკადემიების მართვა
          </div>
        )}
      </NavLink>
    </div>
  )
}

export default AdminNav