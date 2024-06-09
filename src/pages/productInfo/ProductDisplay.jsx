// import React from 'react'
// import img1 from '../../asset/speaker.jpg'
// import { useNavigate } from 'react-router-dom'
// import { MdShoppingCart } from "react-icons/md";

// const ProductDisplay = () => {

//     const ProductData = [
//         {
//             id: 1,
//             name: "XIAOMI Redmi A3 6.71 3GB RAM/64GB ROM Android 12 - Blue + FREE GIFT",
//             price: 95750,
//             description: "Redmi A3 is the Smooth & Stylish phone that will always make heads turn with its luxurious Premium Halo Design. ",
//             brand: 'Xiaomi',
//             phone: '08958885858',
//             email: 'dave@gmail.com',
//             image: <img src={img1} style={{height:260}} alt="Sunset in the mountains"className='w-full'/>,
//             category: 'Phone',
//         },
//         {
//             id: 2,
//             name: "Apple IPhone 15 Pro Max 512gb - Nano Sim - Natural Titanium",
//             price: 2250000,
//             description: "The iPhone 15 Pro Max uses Titanium for its frame, which is lighter and stronger than before.",
//             brand: 'Apple',
//             phone: '08958885858',
//             email: 'dave@gmail.com',
//             image: <img src={img1} style={{height:260}} alt="Sunset in the mountains"className='w-full'/>,
//             category: 'Phone',
//         },
//         {
//             id: 3,
//             name: "Hp EliteBook 840 G6 Touchscreen Intel Core I5 16GB RAM/512GB SSD/Backlit Keyboard/FP Win 11 Pro",
//             price: 495000,
//             description: "HP ELITEBOOK 840 G6 - INTEL CORE I5 - FINGERPRINT READER- BACKLIT KEYBOARD- FULL HD DISPLAY",
//             brand: 'Hewlett-Packard',
//             phone: '08958885858',
//             email: 'dave@gmail.com',
//             image: 'https://images.unsplash.com/photo-1717416699821-b911fa4fd252?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//             // image: <img src={img1} style={{height:260}} alt="Sunset in the mountains"className='w-full'/>,
//             category: 'Computer',
    
//         },
      
//     ]

//     const navigate = useNavigate();  
// const handleProductClick = (id) => {    
//     navigate(`/product/${id}`); 
//  };

//   return (
//     <div>
//          {ProductData.map((product)=>(
//              <button onClick={()=>handleProductClick(product.id)} key={product.id} className='transition-transform duration-300 transform hover:scale-110 bg-white'>
//              <div className='max-w-sm rounded overflow-hidden shadow-lg w-full'>
//                      {/* <img src={product.image} alt={product.name} className="w-full" /> */}
//                      <div>{product.image}</div>
//                      <div className="px-6 py-4 h-52 justify-items-start">
//                              <div className='text-sm mb-2'>{product.name}</div>
//                              <div className='font-bold'>£{product.price}</div>
//                              <div class="px-6 pt-4 pb-2">
//                                 <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//                                         <div className='flex items-center gap-2'>
//                                             <div><MdShoppingCart/></div>
//                                             <div><button>Add to cart</button></div>
//                                         </div>
//                                 </span>                   
//                             </div>
//                      </div>
//              </div>
//          </button>
//         ))}
//     </div>
//   )
// }

// export default ProductDisplay


// src/components/products/ProductDisplay.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdShoppingCart } from "react-icons/md";
import { useCart } from '../../component/cart/CartContext';

const ProductDisplay = () => {
    const { addToCart } = useCart();
    const navigate = useNavigate();  

    const ProductData = [
        {
            id: 1,
            name: "XIAOMI Redmi A3 6.71 3GB RAM/64GB ROM Android 12 - Blue + FREE GIFT",
            price: 95750,
            description: "Redmi A3 is the Smooth & Stylish phone that will always make heads turn with its luxurious Premium Halo Design.",
            brand: 'Xiaomi',
            phone: '08958885858',
            email: 'dave@gmail.com',
            image: 'https://images.unsplash.com/photo-1624434207284-727cf0e6ea8e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
                        image: 'https://images.unsplash.com/photo-1717416699821-b911fa4fd252?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        category: 'Phone',
                    }
        // Add other products here...
    ];

    const handleProductClick = (id) => {    
        navigate(`/product/${id}`); 
    };

    return (
        <div className='flex'>
            {ProductData.map((product) => (
                <div key={product.id} className='max-w-sm rounded overflow-hidden shadow-lg w-full bg-white transition-transform duration-300 transform hover:scale-110'>
                    <button onClick={() => handleProductClick(product.id)}>
                    <img src={product.image} alt={product.name} className="w-full" />
                    <div className="px-6 py-4 h-52 justify-items-start">
                            <div className='text-sm mb-2'>{product.name}</div>
                            <div className='font-bold'>£{product.price.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                        </div>
                    </button>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            <div className='flex items-center gap-2'>
                                <MdShoppingCart />
                                <button onClick={() => addToCart(product)}>Add to cart</button>
                            </div>
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductDisplay;
