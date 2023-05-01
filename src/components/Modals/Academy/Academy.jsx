import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useGeneral } from '../../../Contexts/GeneralProvider';
import academiesService from '../../../services/academies.service';

const initialOpenModals = {
  formatDrop: false,
  categoryDrop: false,
  certificateDrop: false,
  academyDrop: false,
  lecturerDrop: false,
};

const initialAcademyObj = {
  academyName: "",
  description: "",
  logo: null,
  lectors: []
}

const initialLectorObj = {
  firstName: '',
  lastName: '',
  avatar: null
}

const AcademyModal = ({ onClose }) => {
  const [academyObj, setAcademyObj] = useState(initialAcademyObj)

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setAcademyObj({
      ...academyObj,
      [name]: files?.length > 0 ? files[0] : value
    })
  }

  const handleUpdateLector = (lectorIndex, e) => {
    const { name, value, files } = e.target;

    const updatedLectors = [...academyObj.lectors];
    updatedLectors[lectorIndex] = {
      ...updatedLectors[lectorIndex],
      [name]: files?.length > 0 ? files[0] : value
    };

    setAcademyObj({
      ...academyObj,
      'lectors': updatedLectors
    });
  }

  const handleAddLector = () => {
    setAcademyObj({
      ...academyObj,
      'lectors': [...academyObj.lectors, initialLectorObj]
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(academyObj, '[OBJECT]');

  }

  return (
    <div className='w-screen h-screen fixed top-0 left-0 flex  justify-center items-center bg-slate-800/70' onClick={onClose}>
      <form className='p-8 rounded-lg bg-white overflow-auto max-h-screen'>
        <div className='my-2 flex flex-col'>
          <label htmlFor="academy-name" className="text-sm font-semibold text-gray-400">
            აკადემიის სახელი
          </label>
          <input
            className="mt-1 relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            id='academy-name'
            type='text'
            name='academyName'
            placeholder='ჯონის აკადემია'
            onChange={handleChange}
          />
        </div>

        <div className='my-2  flex flex-col'>
          <label htmlFor="academy-description" className="text-sm font-semibold text-gray-400">
            აკადემიის აღწერა
          </label>

          <input
            className="mt-1 relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            id='academy-description'
            type='text'
            name='description'
            placeholder='20 წლიანი გამოცდილების მქონე...'
            onChange={handleChange}
          />
        </div>

        <div className='my-2  flex flex-col'>
          <label htmlFor="academy-avatar" className="text-sm font-semibold text-gray-400">
            აკადემიის ლოგო
          </label>

          <input
            className="mt-1 relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            id='academy-avatar'
            type='file'
            name='logo'
            onChange={handleChange}
          />
        </div>

        <div className='flex flex-col my-8'>
          <label htmlFor="academy-avatar" className="text-sm font-semibold text-gray-400">
            ლექტორები
          </label>

          {academyObj.lectors.map((lector, index) => (
            <div key={`lector-item-${index}`} className='my-2  flex flex-col border-[1px] rounded'>
              <h2>ლექტორი #{index + 1}</h2>
              <label htmlFor={`lector-${index}-name`} className="text-sm font-semibold text-gray-400">
                ლექტორის სახელი
              </label>

              <input
                className="mt-1 relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                id={`lector-${index}-firstName`}
                type='text'
                name='firstName'
                value={lector.firstName}
                onChange={(e) => handleUpdateLector(index, e)}
              />

              <label htmlFor={`lector-${index}-firstName`} className="text-sm font-semibold text-gray-400">
                ლექტორის გვარი
              </label>

              <input
                className="mt-1 relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                id={`lector-${index}-lastName`}
                type='text'
                name='lastName'
                value={lector.lastName}
                onChange={(e) => handleUpdateLector(index, e)}
              />

              <label htmlFor={`lector-${index}-lastName`} className="text-sm font-semibold text-gray-400">
                ლექტორის გვარი
              </label>

              <input
                className="mt-1 relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                id={`lector-${index}-avatar`}
                type='file'
                name='avatar'
                onChange={(e) => handleUpdateLector(index, e)}
              />
            </div>
          ))}

          <button onClick={handleAddLector} type='button' className='mx-auto p-2 rounded bg-indigo-700 border-indigo-700 text-white text-sm w-fit'>+ ლექტორის დამატება</button>
        </div>

        <div className='my-2'>

        </div>

        <div className='flex flex-row items-center justify-between mt-4'>
          <button onClick={handleSubmit} className='p-2 rounded bg-indigo-700 border-indigo-700 text-white'>შენახვა</button>
          <button onClick={onClose} className='p-2 rounded bg-white border-indigo-700 text-indigo-700'>გაუქმება</button>
        </div>
      </form>
    </div>
  )
}

export default AcademyModal