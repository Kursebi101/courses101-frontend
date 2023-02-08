import { useState, useEffect } from 'react'

import SuccessSVG from '../../assets/icons/SuccessSVG';
import ErrorSVG from '../../assets/icons/ErrorSVG';
import WarningSVG from '../../assets/icons/WarningSVG';
import InfoSVG from '../../assets/icons/InfoSVG';

const iconArray = [
  <SuccessSVG stroke='#4ade80' />,
  <ErrorSVG stroke='#f87171' />,
  <WarningSVG stroke='#facc15' />,
  <InfoSVG stroke='#60a5fa' />
];

const bgColorArray = [
  "bg-[#f0fdf4]",
  "bg-[#fef2f2]",
  "bg-[#fefce8]",
  "bg-[#eff6ff]"
];

const textColorArray = [
  "text-[#4ade80]",
  "text-[#f87171]",
  "text-[#facc15]",
  "text-[#60a5fa]"
]

const Alert = ({ type, details }) => {
  const [isActive, toggleIsActive] = useState(false);

  useEffect(() => {
    toggleIsActive(true);
    setTimeout(() => {
      toggleIsActive(false);
    }, 2700);
  }, []);

  return (
    <div className={`flex flex-row z-50 w-fit p-2 rounded gap-4 ${bgColorArray[type]} right-4 fixed top-8  transition-all duration-300 ${isActive ? 'ease-in translate-x-0' : 'translate-x-full'}`}>
      {iconArray[type]}
      <span className={`${textColorArray[type]}`}>{details}</span>
    </div>
  )
}

export default Alert