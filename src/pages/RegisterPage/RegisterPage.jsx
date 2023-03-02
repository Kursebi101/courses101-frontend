import { useEffect, useState } from 'react';
import { LockClosedIcon } from '@heroicons/react/20/solid'
import { Link, useNavigate } from 'react-router-dom';

import Logo from '../../assets/imgs/Logo.png';
import userService from '../../services/user.service';
import { useGeneral } from '../../Contexts/GeneralProvider';

const RegisterPage = () => {
  const { loading, setAlertData, toggleLoading } = useGeneral();
  const navigate = useNavigate();

  const [userObj, setUserObj] = useState({
    email: '',
    firstname: '',
    lastname: '',
    password: '',
    re_password: ''
  });
  const [dropdownOpen, toggleDropdownOpen] = useState(false);
  const [formDisabled, toggleFormDisabled] = useState(false);

  useEffect(() => {
    handleValidation();
  }, [userObj]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserObj({
      ...userObj,
      [name]: value
    })
  };

  const handleValidation = () => {
    let isValid = false;

    for (let key of Object.keys(userObj)) {
      if (!userObj[key] || userObj[key].length === 0) {
        isValid = true;
      }
    }

    if (userObj.password !== userObj.re_password) {
      isValid = true;
    }

    toggleFormDisabled(isValid);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    toggleLoading(true);
    let result = await userService.registerUser(userObj);

    let response_type = result.data.code === 'user/signed_up' ? 0 : 1;
    setAlertData({ type: response_type, details: result.data.message });

    toggleLoading(false);
    if (response_type === 0) navigate('/login');
  }

  return (
    <div className="flex h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[#f9fafb]">
      <div className="w-fit max-w-md space-y-8">
        <div>
          <img
            className="mx-auto h-20 w-auto"
            src={Logo}
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            შექმენით ახალი ექაუნთი
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            ან{' '}
            <Link to={'/login/'} className="font-medium text-indigo-600 hover:text-indigo-500">
              შედით თქვენსაზე
            </Link>
          </p>
        </div>

        <div className='w-full p-8 mt-8 rounded bg-white border-[1px] border-gray-200'>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className='flex flex-col w-full gap-4'>
              <div className='w-full'>
                <label htmlFor="email-address" className="text-sm font-semibold text-gray-400">
                  ელ-ფოსტა
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  onChange={handleChange}
                  value={userObj.email}
                  autoComplete="email"
                  required
                  className="mt-1 relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div className='flex flex-row gap-2'>
                <div className='mt-4'>
                  <label htmlFor="firstname" className="text-sm font-semibold text-gray-400">
                    სახელი
                  </label>
                  <input
                    id="firstname"
                    name="firstname"
                    type="text"
                    onChange={handleChange}
                    value={userObj.firstname}
                    autoComplete='firstname'
                    required
                    className="mt-1 relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div className='mt-4'>
                  <label htmlFor="lastname" className="text-sm font-semibold text-gray-400">
                    გვარი
                  </label>
                  <input
                    id="lastname"
                    name="lastname"
                    type="text"
                    onChange={handleChange}
                    value={userObj.lastname}
                    autoComplete="lastname"
                    required
                    className="mt-1 relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className='flex flex-row gap-2'>
                <div className='mt-4'>
                  <label htmlFor="password" className="text-sm font-semibold text-gray-400">
                    პაროლი
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={handleChange}
                    value={userObj.password}
                    autoComplete="current-password"
                    required
                    className="mt-1 relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className='mt-4'>
                  <label htmlFor="re_password" className="text-sm font-semibold text-gray-400">
                    გაიმეორეთ პაროლი
                  </label>
                  <input
                    id="re_password"
                    name="re_password"
                    type="password"
                    onChange={handleChange}
                    value={userObj.re_password}
                    autoComplete="current-re-password"
                    required
                    className="mt-1 relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* TODO: Can Be Added Later */}
              {/* <div>
                <label htmlFor="role-type" className="text-sm font-semibold text-gray-400">
                  მე ვარ
                </label>
                <div
                  onClick={() => toggleDropdownOpen(!dropdownOpen)}
                  className="flex flex-row h-[38px] mt-1 relative cursor-pointer items-center w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                  <div className='z-20 w-full'>{userObj.roleType ? userObj.roleType === 1 ? 'ლექტორი' : 'სტუდენტი' : ''}</div>
                  <svg className="w-4 h-4 ml-2 absolute right-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  <div className={`${dropdownOpen ? 'flex' : 'hidden'} flex-col z-10 absolute bottom-[-80px] left-0 w-full bg-white rounded border border-gray-300`}>
                    <button onClick={() => handleChange({ target: { name: 'roleType', value: 1 } })} type='button' className='p-2 w-full hover:bg-indigo-600 hover:text-white rounded transition'>
                      ლექტორი
                    </button>
                    <button onClick={() => handleChange({ target: { name: 'roleType', value: 2 } })} type='button' className='p-2 w-full hover:bg-indigo-600 hover:text-white rounded transition'>
                      სტუდენტი
                    </button>
                  </div>
                </div>
              </div> */}
            </div>

            <div>
              <button
                type="submit"
                disabled={formDisabled || loading}
                className={`group relative flex w-full justify-center rounded-md border border-transparent ${loading ? 'bg-indigo-300' : 'bg-indigo-600 hover:bg-indigo-700'} py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                რეგისტრაცია
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage;