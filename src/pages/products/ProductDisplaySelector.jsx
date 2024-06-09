import React from 'react'
import { MdShoppingCart } from "react-icons/md";
import { useCart } from '../../component/cart/CartContext';

const ProductDisplaySelector = ({id, product, price, description, brand, cart, phone, email, image, category}) => {
    const {addToCart} = useCart()
  return (
    <div className=''>
        <button className='transition-transform duration-300 transform hover:scale-110 bg-white'>
            <div className='max-w-sm rounded overflow-hidden shadow-lg w-full'>
                    <div className='image'>{image}</div>
                    <div className="px-6 py-4 h-52 justify-items-start">
                            <div className='text-sm mb-2'>{product}</div>
                            <div className='font-bold'>£{price}</div>
                            <div class="px-6 pt-4 pb-2">
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                        <div className='flex items-center gap-2'>
                                            <div><MdShoppingCart/></div>
                                            <div><button onClick={()=>addToCart({id, product, price, image})}>Add to cart</button></div>
                                        </div>
                                </span>                   
                            </div>
                    </div>
            </div>
        </button>
    </div>
  )
}

export default ProductDisplaySelector