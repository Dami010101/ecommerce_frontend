// import React, { useState } from 'react'
// import cartImage from '../../asset/laptop.jpg'


// const initialCartItems = [
//   { id: 1, productName: 'Product 1', price: 29.99, quantity: 1, image: cartImage },
//   { id: 2, productName: 'Product 2', price: 19.99, quantity: 2, image: cartImage },
//   { id: 3, productName: 'Product 3', price: 39.99, quantity: 1, image: cartImage },
//   // { id: 3, productName: 'Product 3', price: 39.99, quantity: 1, image: 'path/to/image3.jpg' },
// ];

// const Cart = () => {
//   const [cartItems, setCartItems] = useState(initialCartItems);

//   const handleQuantityChange = (id, delta) => {
//     setCartItems((items) =>
//       items.map((item) =>
//         item.id === id ? { ...item, quantity: item.quantity + delta } : item
//       ).filter(item => item.quantity > 0)
//     );
//   };

//   const handleRemove = (id) => {
//     setCartItems((items) => items.filter((item) => item.id !== id));
//   };

//   const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);


//   return (
//     <div className='container mx-auto p-4'>
//           <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
//             {cartItems.length === 0 ? (
//               <p>Your cart is empty.</p>
//             ) : (
//               <div className="grid grid-cols-1 gap-4">
//                 {cartItems.map((item) => (
//                   <div key={item.id} className="p-4 border rounded-lg flex justify-between items-center">
//                     <div className="flex items-center">
//                       <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
//                       <div>
//                         <h2 className="text-xl font-semibold">{item.productName}</h2>
//                         <p>£{item.price.toFixed(2)}</p>
//                       </div>
//                     </div>
//                     <div className="flex items-center">
//                       <button
//                         className="px-3 py-1 bg-gray-200 rounded-l"
//                         onClick={() => handleQuantityChange(item.id, -1)}
//                         disabled={item.quantity === 1}
//                       >
//                         -
//                       </button>
//                       <span className="px-4 py-1 bg-gray-100">{item.quantity}</span>
//                       <button
//                         className="px-3 py-1 bg-gray-200 rounded-r"
//                         onClick={() => handleQuantityChange(item.id, 1)}
//                       >
//                         +
//                       </button>
//                       <button
//                         className="ml-4 px-3 py-1 bg-red-500 text-white rounded"
//                         onClick={() => handleRemove(item.id)}
//                       >
//                         Remove
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//                 <div className="text-right text-xl font-bold">
//                   Total: £{totalPrice}
//                 </div>
//                 <div className="text-right text-xl font-bold">
//                   <button className="px-4 py-1 bg-red-500 text-white rounded">Checkout</button>
//                 </div>
//                 <div className="text-right text-xl font-bold">
//                   <button className="px-4 py-1 bg-red-500 text-white rounded">Continue Shopping</button>
//                 </div>
//               </div>
//             )}
//     </div>
//   )
// }

// export default Cart



// import React from 'react'
// import { useCart } from './CartContext'
// // import { Link } from 'react-router-dom'

// const Cart = () => {
//   const {cart} = useCart()
//   return (
//     <div>
//             <h2>Cart</h2>
//             {cart.length === 0 ? (
//                 <p>Your cart is empty</p>
//             ) : (
//                 <div>
//                     {cart.map((item) => (
//                         <div key={item.id} className="cart-item">
//                             <img src={item.image} alt={item.product} width={100} />
//                             <div>
//                                 <p>{item.product}</p>
//                                 <p>{item.price}</p>
                                
//                             </div>
//                         </div>
//                     ))}
//                     {/* <div>
//                         <h3>Total: ${getTotalPrice().toFixed(2)}</h3>
//                         <Link to="/checkout">
//                             <button>Checkout</button>
//                         </Link>
//                     </div> */}
//                 </div>
//             )}
//         </div>
//   )
// }

// export default Cart




import React from 'react';
import { useCart } from './CartContext';

const Cart = () => {
    const { cartItems, removeFromCart, updateItemQuantity, clearCart } = useCart();

    // Handler for changing the quantity of an item
    const handleQuantityChange = (id, event) => {
        const quantity = parseInt(event.target.value, 10);
        if (quantity > 0) {
            updateItemQuantity(id, quantity);
        }
    };

    // Handler for removing an item from the cart
    const handleRemove = (id) => {
        removeFromCart(id);
    };

    // Handler for the checkout button
    const handleCheckout = () => {
        // Implement checkout logic here
        alert('Proceeding to checkout');
        clearCart(); // Clear the cart after checkout
    };

    // Calculate the total price of the items in the cart
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <div>Your cart is empty.</div>
            ) : (
                <div>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id} className="flex items-center justify-between mb-4">
                                <div className="flex items-center">
                                    <div className="mr-4">
                                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
                                    </div>
                                    <div>
                                        <h2 className="font-bold">{item.name}</h2>
                                        <p>£{item.price.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                                        <div className="flex items-center">
                                            <label htmlFor={`quantity-${item.id}`} className="mr-2">Quantity:</label>
                                            <input
                                                id={`quantity-${item.id}`}
                                                type="number"
                                                min="1"
                                                value={item.quantity}
                                                onChange={(event) => handleQuantityChange(item.id, event)}
                                                className="border rounded p-1 w-16"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleRemove(item.id)}
                                    className="bg-red-500 text-white p-2 rounded"
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4">
                        <h2 className="text-xl font-bold">Total Price: £{totalPrice.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h2>
                        <button
                            onClick={handleCheckout}
                            className="bg-green-500 text-white p-2 rounded mt-2"
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;


