import React from 'react'
import { useParams } from 'react-router-dom'


const ProductDescription = () => {
  const { productName } = useParams();


  return (
<div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Product Page</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold">Product: {productName}</h2>
        {/* Add additional product details here */}
      </div>
    </div>
      )
}

export default ProductDescription