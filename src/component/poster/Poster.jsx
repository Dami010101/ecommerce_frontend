import React from 'react'
import posterImage from '../../asset/speaker.jpg';

const Poster = () => {
  return (
    <div>
<div className="max-w-lg mx-auto p-2 bg-white rounded-lg hover:shadow-lg overflow-hidden mb-2">
      <div className="relative">
        <img 
          src={posterImage} 
          alt="Poster" 
          style={{ width: '100%', height: '39vh'}}
        //   className="w-full h-64 object-cover rounded-t-lg" 
        className="w-full" 
        />
        {/* <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
          <h2 className="text-2xl font-bold">Your Poster Title</h2>
          <p className="mt-2">This is a description or subtitle for the poster. It can be a brief overview of the content depicted in the image.</p>
        </div> */}
      </div>
      {/* <div className="p-1">
        <p className="text-gray-700">Great discounts coming soon!!!</p>
      </div> */}
    </div> 
    
    <div className="max-w-lg mx-auto p-2 bg-white rounded-lg hover:shadow-lg overflow-hidden">
      <div className="relative">
        <img 
          src={posterImage} 
          alt="Poster" 
          style={{ width: '100%', height: '39vh'}}
        //   className="w-full h-64 object-cover rounded-t-lg" 
        className="w-full" 
        />
        {/* <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
          <h2 className="text-2xl font-bold">Your Poster Title</h2>
          <p className="mt-2">This is a description or subtitle for the poster. It can be a brief overview of the content depicted in the image.</p>
        </div> */}
      </div>
      {/* <div className="p-4">
        <p className="text-gray-700">Great discounts coming soon!!!</p>
      </div> */}
    </div> 
    
    </div>   
     )
}

export default Poster