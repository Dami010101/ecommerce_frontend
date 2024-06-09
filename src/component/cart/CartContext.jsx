// import React, { createContext, useContext, useReducer } from 'react';


// const CartContext = createContext();

// const cartReducer = (state, action) => {
//     switch (action.type) {
//         case 'ADD_TO_CART':
//             const existingItem = state.find(item => item.id === action.payload.id);
//             if (existingItem) {
//                 return state.map(item =>
//                     item.id === action.payload.id
//                         ? { ...item, quantity: item.quantity + 1 }
//                         : item
//                 );
//             } else {
//                 return [...state, { ...action.payload, quantity: 1 }];
//             }



        // case 'INCREASE_QUANTITY':
        //     return state.map(item =>
        //         item.id === action.payload.id
        //             ? { ...item, quantity: item.quantity + 1 }
        //             : item
        //     );
        // case 'DECREASE_QUANTITY':
        //     return state.map(item =>
        //         item.id === action.payload.id
        //             ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
        //             : item
        //     );
        // case 'REMOVE_FROM_CART':
        //     return state.filter(item => item.id !== action.payload.id);
        // default:
        //     return state;



//     }
// };

// export const CartProvider = ({ children }) => {
//     const [cart, dispatch] = useReducer(cartReducer, []);

//     const addToCart = (productData) => {
//         dispatch({ type: 'ADD_TO_CART', payload: productData });
//     };





    // const increaseQuantity = (id) => {
    //     dispatch({ type: 'INCREASE_QUANTITY', payload: { id } });
    // };

    // const decreaseQuantity = (id) => {
    //     dispatch({ type: 'DECREASE_QUANTITY', payload: { id } });
    // };

    // const removeFromCart = (id) => {
    //     dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
    // };

    // const getTotalPrice = () => {
    //     return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    // };





//     return (
//         <CartContext.Provider value={{ cart, addToCart }}>
//             {children}
//         </CartContext.Provider>
//     );
// };

// export const useCart = () => useContext(CartContext);





// src/components/cart/CartContext.jsx

import React, { createContext, useState, useContext } from 'react';

// Create the context
const CartContext = createContext();

// Custom hook to use the cart context
export const useCart = () => {
    return useContext(CartContext);
};

// CartProvider component to wrap the app
export const CartProvider = ({ children }) => {
    // Initialize cart items state
    const [cartItems, setCartItems] = useState([]);

    // Function to add an item to the cart
    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {
                // If the item is already in the cart, update its quantity
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            // Otherwise, add the new item to the cart
            return [...prevItems, { ...product, quantity: 1 }];
        });
    };

    // Function to remove an item from the cart
    const removeFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
    };

    // Function to update the quantity of an item in the cart
    const updateItemQuantity = (id, quantity) => {
        setCartItems((prevItems) => {
            return prevItems.map(item =>
                item.id === id ? { ...item, quantity: quantity } : item
            );
        });
    };

    // Function to clear the cart (e.g., after a successful checkout)
    const clearCart = () => {
        setCartItems([]);
    };

    // Provide the cart state and functions to the children components
    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateItemQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

