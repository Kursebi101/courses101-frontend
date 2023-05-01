import { useState, useEffect } from 'react'
import AcademyModal from '../../../components/Modals/Academy/Academy'

const ManageCourses = () => {
  const [modalOpen, toggleModalOpen] = useState(false)

  const handleClose = (e) => {
    if (e && (e.currentTarget !== e.target)) return
    
    toggleModalOpen(false)
  }

  const handleOpen = () => {
    toggleModalOpen(true)
  }

  return (
    <div className='p-4'>
      <button className='p-2 rounded duration-300 bg-indigo-700 font-lg text-sm hover:text-base text-white' onClick={handleOpen}>აკადემიის დამატება</button>
      {modalOpen && <AcademyModal onClose={handleClose} />}
    </div>
  )
}

export default ManageCourses