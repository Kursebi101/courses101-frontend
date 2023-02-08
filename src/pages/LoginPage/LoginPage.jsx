import { useEffect, useState } from 'react';
import { LockClosedIcon } from '@heroicons/react/20/solid'
import { Link, useNavigate } from 'react-router-dom';

import Logo from '../../assets/imgs/Logo.png';

import { useGeneral } from '../../components/Contexts/GeneralProvider';
import { useAuth } from '../../components/Contexts/AuthProvider';

import userService from '../../services/user.service';

const LoginPage = () => {
  const { login } = useAuth();
  const { loading, setAlertData, toggleLoading } = useGeneral();
  const navigate = useNavigate();

  const [userObj, setUserObj] = useState({
    email: '',
    password: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserObj({
      ...userObj,
      [name]: value
    })
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    toggleLoading(true);
    let result = await userService.loginUser(userObj);
    
    let response_type = result.data.code === 'user/signed_in' ? 0 : 1;
    setAlertData({ type: response_type, details: result.data.message });

    if (response_type === 0) {
      login(result.data.data);
      navigate('/')
    };
    toggleLoading(false);
  }

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[#f9fafb]">
      <div className="w-fit max-w-md space-y-8">
        <div>
          <img
            className="mx-auto h-20 w-auto"
            src={Logo}
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            შედით თქვენს ექაუნთზე
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            ან{' '}
            <Link to={'/register/'} className="font-medium text-indigo-600 hover:text-indigo-500">
              შექმენით ახალი
            </Link>
          </p>
        </div>

        <div className='w-full p-8 mt-8 rounded bg-white border-[1px] border-gray-200'>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <div>
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
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  დამიმახსოვრე
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  დაგავიწყდა პაროლი?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className={`group relative flex w-full justify-center rounded-md border border-transparent ${loading ? 'bg-indigo-300' : 'bg-indigo-600 hover:bg-indigo-700'} py-2 px-4 text-sm font-medium text-white transition duration-200  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                შესვლა
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;