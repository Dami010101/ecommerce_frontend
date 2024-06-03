import React, { useState } from 'react'
import cartImage from '../../asset/laptop.jpg'


const initialCartItems = [
  { id: 1, productName: 'Product 1', price: 29.99, quantity: 1, image: cartImage },
  { id: 2, productName: 'Product 2', price: 19.99, quantity: 2, image: cartImage },
  { id: 3, productName: 'Product 3', price: 39.99, quantity: 1, image: cartImage },
  // { id: 3, productName: 'Product 3', price: 39.99, quantity: 1, image: 'path/to/image3.jpg' },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleQuantityChange = (id, delta) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + delta } : item
      ).filter(item => item.quantity > 0)
    );
  };

  const handleRemove = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);


  return (
    <div className='container mx-auto p-4'>
          <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-4 border rounded-lg flex justify-between items-center">
                    <div className="flex items-center">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
                      <div>
                        <h2 className="text-xl font-semibold">{item.productName}</h2>
                        <p>£{item.price.toFixed(2)}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <button
                        className="px-3 py-1 bg-gray-200 rounded-l"
                        onClick={() => handleQuantityChange(item.id, -1)}
                        disabled={item.quantity === 1}
                      >
                        -
                      </button>
                      <span className="px-4 py-1 bg-gray-100">{item.quantity}</span>
                      <button
                        className="px-3 py-1 bg-gray-200 rounded-r"
                        onClick={() => handleQuantityChange(item.id, 1)}
                      >
                        +
                      </button>
                      <button
                        className="ml-4 px-3 py-1 bg-red-500 text-white rounded"
                        onClick={() => handleRemove(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
                <div className="text-right text-xl font-bold">
                  Total: £{totalPrice}
                </div>
                <div className="text-right text-xl font-bold">
                  <button className="px-4 py-1 bg-red-500 text-white rounded">Checkout</button>
                </div>
                <div className="text-right text-xl font-bold">
                  <button className="px-4 py-1 bg-red-500 text-white rounded">Continue Shopping</button>
                </div>
              </div>
            )}
    </div>
  )
}

export default Cart