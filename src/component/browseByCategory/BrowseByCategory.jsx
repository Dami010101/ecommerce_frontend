// import React from 'react'
// import { MdPhoneIphone } from "react-icons/md";
// import { BsSmartwatch } from "react-icons/bs";
// import { FaCamera } from "react-icons/fa6";
// import { FaHeadphones } from "react-icons/fa";
// import { MdOutlineComputer } from "react-icons/md";
// import { IoGameController } from "react-icons/io5";
// // import { LuSpeaker } from "react-icons/lu";
// // import { TbDeviceVisionPro } from "react-icons/tb";
// import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";

// const BrowseByCategory = () => {
//   return (
//     <div>
//         <div className='flex p-2 justify-between mx-auto font-bold mb-3 items-center'>
//             <h1 className='text-xl'>Browse by category</h1>
//             <div className='flex'>
//                 <div><button><MdOutlineKeyboardArrowLeft size={20} /></button></div>
//                 <div><button><MdOutlineKeyboardArrowRight size={20} /></button></div>
//             </div>
//         </div>
//         {/* <div className='flex gap-3 justify-around mx-auto w-1/2'> */}
//         <div className='grid px-2 py-2 w-full grid-cols-3 sm:grid-cols-3 justify-items-center md:grid-cols-4  lg:grid-cols-6 gap-7 align'>
//             <div className='' ><button className='border p-2 border-gray-400 rounded-lg bg-gray-200 text-xs w-24 transition-transform duration-300 transform hover:scale-110'><MdPhoneIphone size={30} className='justify-center' />Phones</button></div>
//             <div ><button className='border p-2 border-gray-400 rounded-lg bg-gray-200 text-xs w-24 transition-transform duration-300 transform hover:scale-110'><BsSmartwatch size={30}  />Smart Watch</button></div>
//             <div><button className='border p-2 border-gray-400 rounded-lg bg-gray-200 text-xs w-24 transition-transform duration-300 transform hover:scale-110'><FaCamera size={30}  />Cameras</button></div>
//             <div><button className='border p-2 border-gray-400 rounded-lg bg-gray-200 text-xs w-24 transition-transform duration-300 transform hover:scale-110'><FaHeadphones size={30}  />Headphones</button></div>
//             <div><button className='border p-2 border-gray-400 rounded-lg bg-gray-200 text-xs w-24 transition-transform duration-300 transform hover:scale-110'><MdOutlineComputer size={30}  />Computer</button></div>
//             <div><button className='border p-2 border-gray-400 rounded-lg bg-gray-200 text-xs w-24 transition-transform duration-300 transform hover:scale-110'><IoGameController size={30}  />Gaming</button></div>
//             {/* <div><button className='border p-2 border-gray-400 rounded-lg bg-gray-200 text-xs w-24 transition-transform duration-300 transform hover:scale-110'><LuSpeaker size={30}  />Speakers</button></div>
//             <div><button className='border p-2 border-gray-400 rounded-lg bg-gray-200 text-xs w-24 transition-transform duration-300 transform hover:scale-110'><TbDeviceVisionPro size={30}  />Vision pro</button></div> */}
//         </div>
//     </div>
//   )
// }

// export default BrowseByCategory



// import React, { useRef } from 'react';
// import { MdPhoneIphone } from "react-icons/md";
// import { BsSmartwatch } from "react-icons/bs";
// import { FaCamera } from "react-icons/fa6";
// import { FaHeadphones } from "react-icons/fa";
// import { MdOutlineComputer } from "react-icons/md";
// import { IoGameController } from "react-icons/io5";
// import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";

// const BrowseByCategory = () => {
//   const scrollContainerRef = useRef(null);

//   const scrollLeft = () => {
//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.scrollBy({
//         left: -200, // Adjust the value as needed
//         behavior: 'smooth'
//       });
//     }
//   };

//   const scrollRight = () => {
//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.scrollBy({
//         left: 200, // Adjust the value as needed
//         behavior: 'smooth'
//       });
//     }
//   };

//   return (
//     <div>
//         <div className='flex w-1/2 justify-between mx-auto font-bold mb-3 items-center'>
//             <h1>Browse by category</h1>
//             <div className='flex'>
//                 <div><button onClick={scrollLeft}><MdOutlineKeyboardArrowLeft size={20} /></button></div>
//                 <div><button onClick={scrollRight}><MdOutlineKeyboardArrowRight size={20} /></button></div>
//             </div>
//         </div>
//         <div 
//           className='grid px-2 py-2 w-full sm:grid-cols-2 justify-items-center md:grid-cols-3 lg:grid-cols-6 gap-7 align overflow-x-auto'
//           ref={scrollContainerRef}
//         >
//             <div><button className='border p-2 border-gray-400 rounded-lg bg-gray-200 text-xs w-24 text-center flex flex-col items-center'><MdPhoneIphone size={30} /><span>Phones</span></button></div>
//             <div><button className='border p-2 border-gray-400 rounded-lg bg-gray-200 text-xs w-24 text-center flex flex-col items-center'><BsSmartwatch size={30} /><span>Smart Watch</span></button></div>
//             <div><button className='border p-2 border-gray-400 rounded-lg bg-gray-200 text-xs w-24 text-center flex flex-col items-center'><FaCamera size={30} /><span>Cameras</span></button></div>
//             <div><button className='border p-2 border-gray-400 rounded-lg bg-gray-200 text-xs w-24 text-center flex flex-col items-center'><FaHeadphones size={30} /><span>Headphones</span></button></div>
//             <div><button className='border p-2 border-gray-400 rounded-lg bg-gray-200 text-xs w-24 text-center flex flex-col items-center'><MdOutlineComputer size={30} /><span>Computer</span></button></div>
//             <div><button className='border p-2 border-gray-400 rounded-lg bg-gray-200 text-xs w-24 text-center flex flex-col items-center'><IoGameController size={30} /><span>Gaming</span></button></div>
//             {/* <div><button className='border p-2 border-gray-400 rounded-lg bg-gray-200 text-xs w-24 text-center flex flex-col items-center'><IoGameController size={30} /><span>Gaming</span></button></div>
//             <div><button className='border p-2 border-gray-400 rounded-lg bg-gray-200 text-xs w-24 text-center flex flex-col items-center'><IoGameController size={30} /><span>Gaming</span></button></div>
//             <div><button className='border p-2 border-gray-400 rounded-lg bg-gray-200 text-xs w-24 text-center flex flex-col items-center'><IoGameController size={30} /><span>Gaming</span></button></div>
//             <div><button className='border p-2 border-gray-400 rounded-lg bg-gray-200 text-xs w-24 text-center flex flex-col items-center'><IoGameController size={30} /><span>Gaming</span></button></div> */}
//         </div>
//     </div>
//   )
// }

// export default BrowseByCategory;




import React, { useState } from 'react';
import { MdPhoneIphone } from "react-icons/md";
import { BsSmartwatch } from "react-icons/bs";
import { FaCamera } from "react-icons/fa6";
import { FaHeadphones } from "react-icons/fa";
import { MdOutlineComputer } from "react-icons/md";
import { IoGameController } from "react-icons/io5";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const items = [
  { icon: <MdPhoneIphone size={30} />, label: 'Phones' },
  { icon: <BsSmartwatch size={30} />, label: 'Smart Watch' },
  { icon: <FaCamera size={30} />, label: 'Cameras' },
  { icon: <FaHeadphones size={30} />, label: 'Headphones' },
  { icon: <MdOutlineComputer size={30} />, label: 'Computer' },
  { icon: <IoGameController size={30} />, label: 'Gaming' },
  { icon: <IoGameController size={30} />, label: 'Gaming' },
  { icon: <IoGameController size={30} />, label: 'Gaming' },
  { icon: <IoGameController size={30} />, label: 'Gaming' },
  { icon: <IoGameController size={30} />, label: 'Gaming' },
  { icon: <FaCamera size={30} />, label: 'Cameras' },
  { icon: <FaHeadphones size={30} />, label: 'Headphones' },
  { icon: <MdOutlineComputer size={30} />, label: 'Computer' },
];

const BrowseByCategory = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 6;

  const scrollLeft = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
  };

  const scrollRight = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + itemsPerPage, items.length - itemsPerPage));
  };

  return (
    <div>
        <div className='flex w-1/2 justify-between mx-auto font-bold mb-3 items-center'>
            <h1>Browse by category</h1>
            <div className='flex'>
                <div><button onClick={scrollLeft}><MdOutlineKeyboardArrowLeft size={20} /></button></div>
                <div><button onClick={scrollRight}><MdOutlineKeyboardArrowRight size={20} /></button></div>
            </div>
        </div>
        <div className='grid px-2 py-2 w-full sm:grid-cols-2 justify-items-center md:grid-cols-3 lg:grid-cols-6 gap-7 align'>
            {items.slice(currentIndex, currentIndex + itemsPerPage).map((item, index) => (
              <div key={index}>
                <button className='border p-2 border-gray-400 rounded-lg bg-gray-200 text-xs w-24 text-center flex flex-col items-center'>
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              </div>
            ))}
        </div>
    </div>
  )
}

export default BrowseByCategory;





