import { useEffect, useState } from 'react'

import ArrowLeftSVG from '../../assets/icons/ArrowLeftSVG'
import ArrowRightSVG from '../../assets/icons/ArrowRightSVG'

const imgArray = [
  {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "ბიზნესი",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia",
    name: "საბავშვო",
    image: "https://images.unsplash.com/photo-1658801956904-43841e89d831?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    description: "Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    name: "ვებ დეველოპმენტი",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "კარიერული განვითარება",
    image: "https://images.unsplash.com/photo-1506784926709-22f1ec395907?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80"
  },
  {
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    name: "ჰობი",
    image: "https://images.unsplash.com/photo-1495175448924-1d9a30c90a42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
  },
  {
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
    name: "ტექნოლოგიები",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    description: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus",
    name: "ენები",
    image: "https://images.unsplash.com/reserve/uZYSV4nuQeyq64azfVIn_15130980706_64134efc6e_o.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80"
  },
]

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   setTimeout(() => {
  //     handleNextSlide();
  //   }, 5000)
  // }, [currentIndex])

  const handlePrevSlide = () => {
    console.log('Test')
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? imgArray.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex);
  }

  const handleNextSlide = () => {
    const isLastSlide = currentIndex === (imgArray.length - 1);
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    console.log(isLastSlide, newIndex, '[INDEX]')
    setCurrentIndex(newIndex);
  }

  return (
    <div className='w-full h-[480px] m-auto py-4 relative group'>
      <div style={{ backgroundImage: `url(${imgArray[currentIndex].image})` }} className='w-full relative h-full rounded-2xl bg-center bg-cover duration-500'>
        <div className='flex flex-col justify-center items-center top-0 left-0 z-10 absolute w-full h-full bg-gray-600/60 rounded-2xl'>
          <div className='text-2xl font-bold text-white'>{imgArray[currentIndex].name}</div>
          <div className='mt-8 italic text-center text-md max-w-[60%] text-white'>{imgArray[currentIndex].description}</div>
        </div>
      </div>
      {/* Left Arrow */}
      <div onClick={handlePrevSlide} className='z-20 hidden group-hover:flex absolute justify-center items-center w-10 h-10  top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <ArrowLeftSVG />
      </div>
      {/* Right Arrow */}
      <div onClick={handleNextSlide} className='z-20 hidden group-hover:flex absolute justify-center items-center w-10 h-10  top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <ArrowRightSVG />
      </div>

      <div className='flex flex-row justify-center py-2 top-4 gap-2'>
        {imgArray.map((slide, slideIndex) => (
          <div key={slideIndex} onClick={() => setCurrentIndex(slideIndex)} className={`w-2 h-2 cursor-pointer rounded-full ${currentIndex === slideIndex ? 'bg-gray-800' : 'bg-gray-600'}`}></div>
        ))}
      </div>
    </div>
  )
}

export default Carousel