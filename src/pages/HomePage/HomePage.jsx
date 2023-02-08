import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../../components/Header';
import Footer from '../../components/Footer';
const HomePage = () => {
  return (
    <div className='flex flex-col justify-between w-full h-full'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default HomePage;