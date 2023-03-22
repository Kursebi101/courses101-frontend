import { useState, useEffect } from 'react'

import Carousel from '../../../components/Carousel'
import Sidebar from '../../../components/Sidebar/Sidebar'

import CourseCard from '../../../components/CourseCard/CourseCard'
import coursesService from '../../../services/courses.service'

const CatalogPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    handleGetCourses();
  }, [])

  const handleGetCourses = async () => {
    let response = await coursesService.getCourses();

    setData(response.data.data);
  }

  return (
    <div className='w-full mx-auto h-full px-4'>
      <Carousel />

      <div className='flex flex-col md:flex-row justify-between w-full mx-auto mt-8'>
        <Sidebar />

        <div className='flex flex-grow flex-wrap gap-4 px-4 justify-between'>
          {data.map(courseItem => (
            <CourseCard courseData={courseItem} />
          ))}
        </div>

        <div className='flex justify-center items-center p-4 rounded-2xl border-[1px] w-full mt-4 md:mt-0 md:w-1/6 bg-cyan-400'>
          <h2 className='text-white font-bold'>შენი რეკლამა აქ</h2>
        </div>
      </div>
    </div>
  )
}

export default CatalogPage