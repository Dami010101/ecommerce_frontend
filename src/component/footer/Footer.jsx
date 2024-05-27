import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 bg-black text-white'>
      <ul>
        <h2 className='mb-1 font-semibold'>USEFUL LINKS</h2>
        <li className='text-xs'><a href='/'>INGREDIENTS</a></li>
        <li className='text-xs'><a href='/'>STORES</a></li>
        <li className='text-xs'><a href='/'>ABOUT US</a></li>
      </ul>
      <ul>
        <h2 className='mb-1 font-semibold'>SUPPORT CENTER</h2>
        <li className='text-xs'><a href='/'>CONTACT US</a></li>
        <li className='text-xs'><a href='/'>TERMS AND CONDITIONS</a></li>
        <li className='text-xs'><a href='/'>PRIVACY POLICY</a></li>
        <li className='text-xs'><a href='/'>SUBSCRIBE</a></li>
        <li className='text-xs'><a href='/'>ABOUT US</a></li>
      </ul>

      <ul>
        <h2 className='mb-1 font-semibold'>CONTACT US</h2>
        <li className='text-xs' ><a href='/'><div className='flex items-center gap-2'><div><FaPhoneAlt /></div><div>PHONE: +1230 123 1231.</div></div></a></li>
        <li className='text-xs'><a href='/'><div className='flex items-center gap-2'><div><MdEmail /></div><div>EMAIL: info@ecommerce.com</div></div></a></li>
        <li className='text-xs'><a href='/'><div className='flex items-center gap-2'><div><FaGlobe /></div><div>WEBSITE: www.ecommerce.com</div></div></a></li>
     </ul>

     <ul>
     
     <h2 className='mb-1 font-semibold'>RESOURCES</h2>
        <li className='text-xs'><a href='/'>EBOOKS</a></li>
        <li className='text-xs'><a href='/'>BLOG</a></li>
        <li className='text-xs'><a href='/'>KNOWLEDGE BASE</a></li>
        <li className='text-xs'><a href='/'>CUSTOMER REVIEWS</a></li>

      </ul>
    </div>
    </div>
  )
}

export default Footer