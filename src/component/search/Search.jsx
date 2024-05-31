import React from 'react'
import { IoSearchOutline } from "react-icons/io5";

const Search = ({onchangehandle, onchangevalue}) => {
  return (
    <div>
        <div className=' pr-4'>      
            <div className='flex bg-gray-300 w-[300px] p-1 px-3 py-1 items-center mt-2 rounded-full'>
                <input type='text' onChange={onchangehandle} value={onchangevalue} placeholder='Search for products' className='px-3 py-1 w-[95%] outline-none bg-gray-300 rounded-full'/><IoSearchOutline />
            </div>
        </div>
    </div>
  )
}

export default Search