import React from 'react'
import { useNavigate } from 'react-router-dom'
const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/')
  }

  return (
    <div className='flex flex-col justify-center items-center w-full h-screen '>
      <h2 className='text-3xl font-semibold mb-4 text-indigo-600'>უპს!</h2>
      <h2 className='text-3xl font-semibold mb-4'>გვერდი ვერ მოიძებნა</h2>
      <h1 className='text-6xl font-bold text-indigo-600 mb-4'>404</h1>
      <button onClick={handleGoBack} type="button" className='p-4 rounded text-md text-white font-semibold transition-all duration-300 bg-indigo-600 hover:bg-indigo-400'>მთავარზე დაბრუნება</button>
    </div>
  )
}

export default ErrorPage