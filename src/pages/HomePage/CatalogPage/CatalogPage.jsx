import React from 'react'

import Carousel from '../../../components/Carousel'
import Sidebar from '../../../components/Sidebar/Sidebar'

const CatalogPage = () => {
  return (
    <div className='w-full mx-auto h-full px-4'>
      <Carousel />

      <div className='flex flex-col md:flex-row justify-between w-full mx-auto mt-8'>
        <Sidebar />

        <div className='flex justify-center items-center p-4 rounded-2xl border-[1px] w-full mt-4 md:mt-0 md:w-1/6 bg-cyan-400'>
          <h2 className='text-white font-bold'>შენი რეკლამა აქ</h2>
        </div>
      </div>
    </div>
  )
}

export default CatalogPage