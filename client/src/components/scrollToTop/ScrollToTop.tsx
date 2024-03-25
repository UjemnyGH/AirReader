import React, { useEffect, useState } from 'react'
import { FaArrowUpLong } from "react-icons/fa6";


export const ScrollToTop: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 500 ? setShowButton(true) : setShowButton(false);
    })
  }, []);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      { showButton && <button type='button' className='fixed z-50 bottom-10 right-5 border border-[#007BFF] bg-transparent text-[#007BFF] hover:bg-[#007BFF] w-10 h-10 rounded-full flex items-center justify-center hover:text-white transition-colors duration-75 ease-in-out font-bold text-xl' onClick={() => scrollToTop()}><FaArrowUpLong /></button>}
    </>
  )
}
