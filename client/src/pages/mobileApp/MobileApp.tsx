import React from 'react';
import { Link } from 'react-router-dom';
import { FaGooglePlay } from "react-icons/fa6";
import { GrAppleAppStore } from "react-icons/gr";

export const MobileApp: React.FC = () => {
  return (
    <div className='container mx-auto h-screen'>
      <div className="w-full h-[80%] flex items-center justify-center gap-x-20">
        <div className="flex flex-col items-center gap-y-8">
          <div className="shadow-xl rounded-2xl">
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" alt="qrcode" width='200px'/>
          </div>
          <Link to={'#'} className='flex items-center gap-2 text-3xl font-semibold'>
            Google Play
            <FaGooglePlay />
          </Link>
        </div>
        <div className="w-1 h-[50%] bg-black/20"></div>
        <div className="flex flex-col items-center gap-y-8">
          <div className="shadow-xl rounded-2xl">
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" alt="qrcode" width='200px'/>
          </div>
          <Link to={'#'} className='flex items-center gap-2 text-3xl font-semibold'>
            App Store
            <GrAppleAppStore />
          </Link>
        </div>
      </div>
    </div>
  )
}
