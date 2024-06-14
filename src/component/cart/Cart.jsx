import React from 'react';
import { useCart } from './CartContext';
import { useOrders } from '../orderManagement/OrderContext'; // Corrected import

const Cart = () => {
    const { cartItems, removeFromCart, updateItemQuantity, clearCart } = useCart();
    const { addOrder } = useOrders(); // Get the addOrder function from the order context

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
        const orderId = Date.now(); // Simple unique order ID
        const userName = "John Doe"; // Replace with the actual user name in a real application
        const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

        const newOrder = {
            id: orderId,
            userName,
            totalAmount,
            paymentStatus: 'unpaid',
            deliveryStatus: 'undelivered',
            cartItems,
        };

        addOrder(newOrder); // Add the new order to the order context
        clearCart(); // Clear the cart after checkout
        alert('Order placed successfully');
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
                                            <div className="flex items-center">
                                                <button
                                                    onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                                    className="border rounded-l px-2 py-1 bg-gray-200"
                                                >
                                                    -
                                                </button>
                                                <input
                                                    id={`quantity-${item.id}`}
                                                    type="number"
                                                    min="1"
                                                    value={item.quantity}
                                                    onChange={(event) => handleQuantityChange(item.id, event)}
                                                    className="border-t border-b w-16 text-center"
                                                />
                                                <button
                                                    onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                                    className="border rounded-r px-2 py-1 bg-gray-200"
                                                >
                                                    +
                                                </button>
                                            </div>
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
