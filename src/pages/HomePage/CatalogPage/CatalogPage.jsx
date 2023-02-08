import React from 'react'

import Carousel from '../../../components/Carousel'
import Sidebar from '../../../components/Sidebar/Sidebar'

const CatalogPage = () => {
  return (
    <div className='w-full mx-auto h-full'>
      <Carousel />

      <div className='md:w-[1400px] mx-auto mt-8'>
        <Sidebar />
      </div>
    </div>
  )
}

export default CatalogPage