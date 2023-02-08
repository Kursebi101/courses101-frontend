import React from 'react'
import { Outlet } from 'react-router-dom'
import { AuthProvider } from '../../components/Contexts/AuthProvider'
import { GeneralProvider, useGeneral } from '../../components/Contexts/GeneralProvider'
import Alert from '../../components/Alert'

const RootPage = () => {
  const { alertData } = useGeneral();
  return (
    <div className='w-full h-screen'>
      <Outlet />
      {alertData && <Alert type={alertData.type} details={alertData.details} />}
    </div>
  )
}

export default RootPage