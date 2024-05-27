import React from 'react'
import { MdPhoneIphone } from "react-icons/md";
import { BsSmartwatch } from "react-icons/bs";
import { FaCamera } from "react-icons/fa6";
import { FaHeadphones } from "react-icons/fa";
import { MdOutlineComputer } from "react-icons/md";
import { IoGameController } from "react-icons/io5";
// import { LuSpeaker } from "react-icons/lu";
// import { TbDeviceVisionPro } from "react-icons/tb";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const BrowseByCategory = () => {
  return (
    <div>
        <div className='flex w-1/2 justify-between mx-auto font-bold mb-3 items-center'>
            <h1>Browse by category</h1>
            <div className='flex'>
                <div><button><MdOutlineKeyboardArrowLeft size={20} /></button></div>
                <div><button><MdOutlineKeyboardArrowRight size={20} /></button></div>
            </div>
        </div>
        {/* <div className='flex gap-3 justify-around mx-auto w-1/2'> */}
        <div className='grid px-2 py-2 w-full sm:grid-cols-2 justify-items-center md:grid-cols-3  lg:grid-cols-6 gap-7 align'>
            <div className='' ><button className='border p-2 border-gray-400 rounded-lg bg-gray-200 text-xs w-24'><MdPhoneIphone size={30} className='justify-center' />Phones</button></div>
            <div ><button className='border p-2 border-gray-400 rounded-lg bg-gray-200 text-xs w-24'><BsSmartwatch size={30}  />Smart Watch</button></div>
            <div><button className='border p-2 border-gray-400 rounded-lg bg-gray-200 text-xs w-24'><FaCamera size={30}  />Cameras</button></div>
            <div><button className='border p-2 border-gray-400 rounded-lg bg-gray-200 text-xs w-24'><FaHeadphones size={30}  />Headphones</button></div>
            <div><button className='border p-2 border-gray-400 rounded-lg bg-gray-200 text-xs w-24'><MdOutlineComputer size={30}  />Computer</button></div>
            <div><button className='border p-2 border-gray-400 rounded-lg bg-gray-200 text-xs w-24'><IoGameController size={30}  />Gaming</button></div>
            {/* <div><button className='border p-2 border-gray-400 rounded-lg bg-gray-200 text-xs w-24'><LuSpeaker size={30}  />Speakers</button></div>
            <div><button className='border p-2 border-gray-400 rounded-lg bg-gray-200 text-xs w-24'><TbDeviceVisionPro size={30}  />Vision pro</button></div> */}
        </div>
    </div>
  )
}

export default BrowseByCategory