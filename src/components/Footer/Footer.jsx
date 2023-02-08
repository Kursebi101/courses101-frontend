import React from 'react'
import { Disclosure } from '@headlessui/react'

import FacebookIco from '../../assets/icons/socials/facebook.png';
import GithubIco from '../../assets/icons/socials/github.png';
import InstagramIco from '../../assets/icons/socials/instagram.png';
import TwitterIco from '../../assets/icons/socials/twitter.png';
import YoutubeIco from '../../assets/icons/socials/youtube.png';

const Footer = () => {
  return (
    <Disclosure as="nav" className="bg-gray-800 p-4 mt-32">
      <div className='flex flex-row items-center justify-between w-full sm:px-6 lg:px-16'>
        <span className='text-white text-xs'>© 2023 Kursebi.ge, Inc. All rights reserved.</span>

        <div className='flex flex-row gap-4 items-center'>
          <img className='cursor-pointer' src={FacebookIco} alt='Facebook' width={28} height={28} />
          <img className='cursor-pointer' src={InstagramIco} alt='Facebook' width={28} height={28} />
          <img className='cursor-pointer' src={TwitterIco} alt='Facebook' width={28} height={28} />
          <img className='cursor-pointer' src={YoutubeIco} alt='Facebook' width={28} height={28} />
          <img className='cursor-pointer' src={GithubIco} alt='Facebook' width={28} height={28} />
        </div>
      </div>
    </Disclosure>
  )
}

export default Footer