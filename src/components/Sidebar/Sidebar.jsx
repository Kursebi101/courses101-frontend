import { useState } from 'react'
import { useGeneral } from '../Contexts/GeneralProvider';

const Sidebar = () => {
  const { formats, categories, loading, toggleLoading } = useGeneral();

  const [filterObj, setFilterObj] = useState({
    courseFormat: '',
    courseCategory: '',
    duration: '',

  });
  const [cFormatDropdown, toggleCFormatDropdown] = useState(false);
  const [cCatDropdown, toggleCatDropdown] = useState(false);
  const [courseDuration, setCourseDuration] = useState({
    hours: 0,
    minutes: 0,
  })
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFilterObj({
      ...filterObj,
      [name]: value
    });
  }

  const handleDurationChange = (event) => {
    const { name, value } = event.target;

    setCourseDuration({
      ...courseDuration,
      [name]: value
    })
  }

  const handleGetFormatName = () => {
    let format = formats.filter(format => format._id === filterObj.courseFormat)[0];

    return format ? format.formatName : '';
  }
  const handleGetCatName = () => {
    let category = categories.filter(category => category._id === filterObj.courseCategory)[0];

    return category ? category.catName : '';
  }

  const handleSubmit = async () => {
    // TODO: Filter Logic
  }

  return (
    <div className='p-4 rounded-2xl border border-[1px] w-1/4'>
      <h2 className='font-semibold mb-4'>ფილტრი</h2>

      <div className='mb-4'>
        <label htmlFor="course-format" className="text-sm font-semibold text-gray-400">
          კურსის ფორმატი
        </label>
        <div
          onClick={() => toggleCFormatDropdown(!cFormatDropdown)}
          className="flex flex-row h-[38px] mt-1 relative cursor-pointer items-center w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        >
          <div className='z-10 w-full'>{handleGetFormatName()}</div>
          <svg className="w-4 h-4 ml-2 absolute right-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          {/* Dropdown */}
          <div className={`${cFormatDropdown ? 'flex' : 'hidden'} flex-col z-20 absolute bottom-[-80px] left-0 w-full bg-white rounded border border-gray-300`}>
            {
              formats.map(format => (
                <button key={format._id} onClick={() => handleChange({ target: { name: 'courseFormat', value: format._id } })} type='button' className='p-2 w-full hover:bg-indigo-600 hover:text-white rounded transition'>
                  {format.formatName}
                </button>
              ))
            }
          </div>
        </div>
      </div>

      <div className='mb-4'>
        <label htmlFor="course-category" className="text-sm font-semibold text-gray-400">
          კატეგორია
        </label>
        <div
          onClick={() => toggleCatDropdown(!cCatDropdown)}
          className="flex flex-row h-[38px] mt-1 relative cursor-pointer items-center w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        >
          <div className='z-10 w-full'>{handleGetCatName()}</div>
          <svg className="w-4 h-4 ml-2 absolute right-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          {/* Dropdown */}
          <div className={`${cCatDropdown ? 'flex' : 'hidden'} flex-col z-20 absolute top-full left-0 w-full bg-white rounded border border-gray-300`}>
            {
              categories.map(category => (
                <button key={category._id} onClick={() => handleChange({ target: { name: 'courseCategory', value: category._id } })} type='button' className='p-2 w-full hover:bg-indigo-600 hover:text-white rounded transition'>
                  {category.catName}
                </button>
              ))
            }
          </div>
        </div>
      </div>

      <div className='mb-4'>
        <label htmlFor='course-duration' className="text-sm font-semibold text-gray-400">
          ხანგრძლივობა
        </label>
        <div className='flex flex-row justify-between items-center gap-8'>
          <div className='flex flex-row items-center'>
            <input type="number" placeholder='საათი' name='hours' onChange={handleDurationChange} className="h-[38px] mt-1 relative cursor-pointer items-center w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
          </div>
          <div className='flex flex-row items-center'>
            <input type="number" placeholder='წუთი' name='minutes' onChange={handleDurationChange} className="h-[38px] mt-1 relative cursor-pointer items-center w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
          </div>
        </div>
      </div>

      <div className='mb-4'>
        <label htmlFor='price' className="text-sm font-semibold text-gray-400">
          ფასი
        </label>
        <div className='flex flex-row items-center'>
          <input type="number" id='price' name='price' placeholder='ლარი' onChange={handleChange} className="h-[38px] mt-1 relative cursor-pointer items-center w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
        </div>
      </div>

      <div className="flex items-center mb-4 ">
        <input
          id="certificate"
          name="certificate"
          type="checkbox"
          onChange={handleChange}
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
        />
        <label htmlFor="certificate" className="ml-2 block text-sm font-semibold text-gray-400 cursor-pointer">
          სერტიფიკატი
        </label>
      </div>

      <div>
        <button
          type="submit"
          disabled={loading}
          onSubmit={handleSubmit}
          className={`group mt-8 transition-all duration-300 relative flex w-full justify-center rounded-md border border-transparent ${loading ? 'bg-indigo-300' : 'bg-indigo-600 hover:bg-indigo-700'} py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
        >
          ძებნა
        </button>
      </div>
    </div>
  )
}

export default Sidebar