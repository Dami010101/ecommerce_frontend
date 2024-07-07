

import React from 'react';
// import img1 from '../../asset/freestocks-_3Q3tsJ01nc-unsplash.jpg';
import { useParams } from 'react-router-dom';
import { MdShoppingCart } from "react-icons/md";
import { useCart } from '../../component/cart/CartContext';

const ProductInfo = () => {
    const { addToCart } = useCart();
    const { id } = useParams();  

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

    const product = ProductData.find(p => p.id === parseInt(id));
    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <div className="max-w-sm rounded overflow-hidden shadow-lg w-full">
            <img src={product.image} alt={product.name} className="w-full" />
            <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{product.name}</div>
                    <p className="text-gray-700 text-base">£{product.price.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                    <p className="text-gray-700 text-base">{product.description}</p>
                    <p className="text-gray-700 text-base">{product.brand}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        <div className='flex items-center gap-2'>
                            <MdShoppingCart />
                            <button onClick={() => addToCart(product)}>Add to cart</button>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
