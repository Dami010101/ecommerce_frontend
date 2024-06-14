import React from 'react';
import { useOrders } from './OrderContext';
import { Link } from 'react-router-dom';

const OrderList = () => {
    const { orders, setOrders } = useOrders();

    const togglePaymentStatus = (orderId) => {
        setOrders(orders.map(order => 
            order.id === orderId ? { ...order, paymentStatus: order.paymentStatus === 'unpaid' ? 'paid' : 'unpaid' } : order
        ));
    };

    const toggleDeliveryStatus = (orderId) => {
        setOrders(orders.map(order => 
            order.id === orderId ? { ...order, deliveryStatus: order.deliveryStatus === 'undelivered' ? 'delivered' : 'undelivered' } : order
        ));
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Order List</h1>
            {orders.length === 0 ? (
                <div>No orders have been placed yet.</div>
            ) : (
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Order ID</th>
                            <th className="py-2 px-4 border-b">User Name</th>
                            <th className="py-2 px-4 border-b">Total Amount</th>
                            <th className="py-2 px-4 border-b">Payment Status</th>
                            <th className="py-2 px-4 border-b">Delivery Status</th>
                            <th className="py-2 px-4 border-b">Cart Items</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => (
                            <tr key={order.id}>
                                <td className="py-2 px-4 border-b">{order.id}</td>
                                <td className="py-2 px-4 border-b">{order.userName}</td>
                                <td className="py-2 px-4 border-b">£{order.totalAmount.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                                <td className="py-2 px-4 border-b">
                                    <button
                                        onClick={() => togglePaymentStatus(order.id)}
                                        className={`px-4 py-2 rounded ${order.paymentStatus === 'unpaid' ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}
                                    >
                                        {order.paymentStatus}
                                    </button>
                                </td>
                                <td className="py-2 px-4 border-b">
                                    <button
                                        onClick={() => toggleDeliveryStatus(order.id)}
                                        className={`px-4 py-2 rounded ${order.deliveryStatus === 'undelivered' ? 'bg-yellow-500 text-white' : 'bg-green-500 text-white'}`}
                                    >
                                        {order.deliveryStatus}
                                    </button>
                                </td>
                                <td className="py-2 px-4 border-b">
                                    <Link to={`/cart/${order.id}`} className="bg-blue-500 text-white px-4 py-2 rounded">
                                        View Items
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default OrderList;
