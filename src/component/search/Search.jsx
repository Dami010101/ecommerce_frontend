import React, { useEffect, useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


const Search = ({onchangehandle, onchangevalue}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      navigate(`/product/${searchTerm}`);
    }
  };

  return (
    <div>
        <div className=' pr-4'>      
            <div className='flex bg-gray-300 w-[300px] p-1 px-3 py-1 items-center mt-2 rounded-full'>
                <input type='text' onChange={onchangehandle} value={onchangevalue} placeholder='Search for products' className='px-3 py-1 w-[95%] outline-none bg-gray-300 rounded-full'/><IoSearchOutline />
            </div>
        </div>

        {/* <div className=' pr-4'>      
            <div className='flex bg-gray-300 w-[300px] p-1 px-3 py-1 items-center mt-2 rounded-full'>
            <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Type a product name..."
          className="border p-2 rounded-l-lg"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-lg"
        >
          Search
        </button>
                    </div>
        </div> */}

        
    </div>
  )
}

export default Search