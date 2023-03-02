import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useGeneral } from '../../../../Contexts/GeneralProvider';
import coursesService from '../../../../services/courses.service';

const initialOpenModals = {
  formatDrop: false,
  categoryDrop: false,
  certificateDrop: false,
  academyDrop: false,
  lecturerDrop: false,
};

const initialCourseObj = {
  formatType: {
    id: '',
    name: ''
  },
  category: {
    id: '',
    name: ''
  },
  duration_hour: 0,
  duration_minutes: 0,
  hasCertificate: false,
  price: 0,
  academy: {
    id: '0',
    name: 'Natro Academy'
  },
  lecturer: {
    id: '0',
    name: 'The Natro'
  },
  groupSchedule: [
    {
      groupName: 'ჯგუფი 1',
      scheduledDay: 'ორშაბათი',
      scheduledHour: '13:30',
    },
    {
      groupName: 'ჯგუფი 2',
      scheduledDay: 'ორშაბათი',
      scheduledTime: '13:30',
    },
  ],
  startMonth: 'მარტი',
}

const CoursesModal = ({ onClose }) => {
  const { roles, formats, categories, setAlertData } = useGeneral()
  const navigate = useNavigate()

  const [openModal, toggleOpenModal] = useState(initialOpenModals)
  const [courseObj, setCourseObj] = useState(initialCourseObj)

  useEffect(() => {
    console.log(courseObj, ' [Updated Course Object]')
  }, [courseObj])

  const handleModalOpen = (name) => {
    toggleOpenModal({
      ...openModal,
      [name]: !openModal[name]
    })
  }

  const handleChange = (name, value) => {
    console.log(name, value)
    setCourseObj({
      ...courseObj,
      [name]: value
    })
  }

  const handleSubmit = async () => {
    const objToSave = {...courseObj};

    objToSave.duration = `${objToSave.duration_hour} სთ. ${objToSave.duration_minutes} წთ.`

    let result = await coursesService.createCourse(objToSave);

    let response_type = result.data.code === 'course/created' ? 0 : 1;
    
    setAlertData({ type: response_type, details: result.data.message });

    if(result.data.code === 'course/created') onClose();
    
    // toggleLoading(false);
    // if (response_type === 0) navigate('/login');
  }

  return (
    <div className='w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-slate-800/70' onClick={onClose}>
      <div className='p-8 rounded-lg bg-white'>
        <div className='my-2'>
          <label htmlFor="role-type" className="text-sm font-semibold text-gray-400">
            კურსის ფორმატი
          </label>
          <div
            onClick={() => handleModalOpen('formatDrop')}
            className="flex flex-row h-[38px] mt-1 relative cursor-pointer items-center w-full appearance-none rounded border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          >
            <div className='z-20 w-full mr-4'>{courseObj.formatType.name}</div>
            <svg className="w-4 h-4 ml-2 absolute right-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            <div className={`${openModal.formatDrop ? 'flex' : 'hidden'} flex-col z-30 absolute top-full left-0 w-full bg-white rounded border border-gray-300`}>
              {
                formats.map(format => (
                  <button onClick={() => handleChange('formatType', { id: format._id, name: format.formatName })} type='button' className='p-2 w-full hover:bg-indigo-600 hover:text-white rounded transition'>
                    {format.formatName}
                  </button>
                ))
              }
            </div>
          </div>
        </div>

        <div className='my-2'>
          <label htmlFor="role-type" className="text-sm font-semibold text-gray-400">
            კურსის კატეგორია
          </label>
          <div
            onClick={() => handleModalOpen('categoryDrop')}
            className="flex flex-row h-[38px] mt-1 relative cursor-pointer items-center w-full appearance-none rounded border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          >
            <div className='z-20 w-full mr-4'>{courseObj.category.name}</div>
            <svg className="w-4 h-4 ml-2 absolute right-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            <div className={`${openModal.categoryDrop ? 'flex' : 'hidden'} flex-col z-30 absolute top-full left-0 w-full bg-white rounded border border-gray-300`}>
              {
                categories.map(category => (
                  <button onClick={() => handleChange('category', { id: category._id, name: category.catName })} type='button' className='p-2 w-full hover:bg-indigo-600 hover:text-white rounded transition'>
                    {category.catName}
                  </button>
                ))
              }
            </div>
          </div>
        </div>

        <div className='my-2'>
          <label htmlFor="duration_hour" className="text-sm font-semibold text-gray-400">
            ხანგრძლივობა
          </label>

          <div className='flex flex-row gap-2 items-center'>
            <input
              id="duration_hour"
              name="duration_hour"
              type="number"
              onChange={e => handleChange(e.target.name, e.target.value)}
              value={courseObj.duration_hour}
              required
              className="mt-1 relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
            <span>სთ</span>
            <input
              id="duration_minutes"
              name="duration_minutes"
              type="number"
              onChange={e => handleChange(e.target.name, e.target.value)}
              value={courseObj.duration_minutes}
              required
              className="mt-1 relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
            <span>წთ</span>
          </div>
        </div>

        <div className='my-2'>
          <label htmlFor="role-type" className="text-sm font-semibold text-gray-400">
            სერთიფიცირებული
          </label>
          <div
            onClick={() => handleModalOpen('certificateDrop')}
            className="flex flex-row h-[38px] mt-1 relative cursor-pointer items-center w-full appearance-none rounded border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          >
            <div className='z-20 w-full mr-4'>{courseObj.hasCertificate ? 'კი' : 'არა'}</div>
            <svg className="w-4 h-4 ml-2 absolute right-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            <div className={`${openModal.certificateDrop ? 'flex' : 'hidden'} flex-col z-30 absolute top-full left-0 w-full bg-white rounded border border-gray-300`}>
              <button onClick={() => handleChange('hasCertificate', true)} type='button' className='p-2 w-full hover:bg-indigo-600 hover:text-white rounded transition'>
                კი
              </button>
              <button onClick={() => handleChange('hasCertificate', false)} type='button' className='p-2 w-full hover:bg-indigo-600 hover:text-white rounded transition'>
                არა
              </button>
            </div>
          </div>
        </div>

        <div className='my-2'>
          <label htmlFor="price" className="text-sm font-semibold text-gray-400">
            ფასი
          </label>

          <input
            id="price"
            name="price"
            type="number"
            onChange={e => handleChange(e.target.name, e.target.value)}
            value={courseObj.price}
            required
            className="mt-1 relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div className='flex flex-row items-center justify-between mt-4'>
          <button onClick={handleSubmit} className='p-2 rounded bg-indigo-700 border-indigo-700 text-white'>შენახვა</button>
          <button onClick={onClose} className='p-2 rounded bg-white border-indigo-700 text-indigo-700'>გაუქმება</button>
        </div>
      </div>
    </div>
  )
}

export default CoursesModal