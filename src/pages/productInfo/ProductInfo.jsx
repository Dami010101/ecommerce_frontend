import React from 'react'
import img1 from '../../asset/freestocks-_3Q3tsJ01nc-unsplash.jpg'
import { useParams } from 'react-router-dom'

const ProductInfo = () => {

  const ProductDatha = [
    {
        id: 1,
        name: "XIAOMI Redmi A3 6.71 3GB RAM/64GB ROM Android 12 - Blue + FREE GIFT",
        price: 95750,
        description: "Redmi A3 is the Smooth & Stylish phone that will always make heads turn with its luxurious Premium Halo Design. ",
        brand: 'Xiaomi',
        phone: '08958885858',
        email: 'dave@gmail.com',
        image: <img src={img1} style={{height:260}} alt="Sunset in the mountains"className='w-full'/>,
        category: 'Phone',
    },
    {
        id: 2,
        name: "Apple IPhone 15 Pro Max 512gb - Nano Sim - Natural Titanium",
        price: 2250000,
        description: "The iPhone 15 Pro Max uses Titanium for its frame, which is lighter and stronger than before.",
        brand: 'Apple',
        phone: '08958885858',
        email: 'dave@gmail.com',
        image: <img src={img1} style={{height:260}} alt="Sunset in the mountains"className='w-full'/>,
        category: 'Phone',
    },
    {
        id: 3,
        name: "Hp EliteBook 840 G6 Touchscreen Intel Core I5 16GB RAM/512GB SSD/Backlit Keyboard/FP Win 11 Pro",
        price: 495000,
        description: "HP ELITEBOOK 840 G6 - INTEL CORE I5 - FINGERPRINT READER- BACKLIT KEYBOARD- FULL HD DISPLAY",
        brand: 'Hewlett-Packard',
        phone: '08958885858',
        email: 'dave@gmail.com',
        // image: <img src={img1} style={{height:260}} alt="Sunset in the mountains"className='w-full'/>,
        image: 'https://images.unsplash.com/photo-1717416699821-b911fa4fd252?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: 'Computer',

    },
  
]

const { id } = useParams();  
const product = ProductDatha.find(p => p.id === parseInt(id));  
if (!product) {    
  return <div>Product not found</div>;
}

  return (
    <div>
      <div className="container mx-auto p-4">      
      <div className="max-w-sm rounded overflow-hidden shadow-lg w-full">        
      {/* <img src={product.image} alt={product.name} className="w-full" />         */}
      <div>{product.image}</div>
      <div className="px-6 py-4">         
       <div className="font-bold text-xl mb-2">{product.name}</div>          
       <p className="text-gray-700 text-base">{product.price}</p>       
       <p className="text-gray-700 text-base">{product.description}</p>       
       <p className="text-gray-700 text-base">{product.brand}</p>       
        </div>     
         </div>   
          </div>
    </div>
  )
}

export default ProductInfo