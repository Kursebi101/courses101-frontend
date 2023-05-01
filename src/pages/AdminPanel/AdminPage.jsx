import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNav from '../../components/AdminNav'


const AdminPage = () => {
  return (
    <div className='flex flex-col flex-grow h-content-height'>
      <AdminNav />
      <Outlet />
    </div>
  )
}

export default AdminPage