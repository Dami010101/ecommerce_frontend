import React, { useState } from 'react'
import profileImage from '../../asset/freestocks-_3Q3tsJ01nc-unsplash.jpg'


const initialUserData = {
  name: 'Josephine Tom',
  email: 'josephine.tom@gmail.com',
  address: '6 Olympus St, London, UK',
  profilePicture: 'https://images.unsplash.com/photo-1717416699821-b911fa4fd252?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  orders: [
    { id: 1, product: 'Product 1', date: '2023-05-01', amount: 29.99 },
    { id: 2, product: 'Product 2', date: '2023-04-15', amount: 19.99 },
    { id: 3, product: 'Product 3', date: '2023-03-25', amount: 39.99 },
  ],
};
  //  profilePicture: 'path/to/defaultProfilePicture.jpg', 

const UserProfile = () => {
  const [user, setUser] = useState(initialUserData);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...user });
  const [selectedFile, setSelectedFile] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, profilePicture: reader.result });
        setUser({ ...formData, profilePicture: reader.result });
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setUser(formData);
    }
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredOrders = user.orders.filter((order) =>
    order.product.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">Profile</h1>
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex items-center mb-4">
        <img
          src={user.profilePicture}
          alt="Profile"
          className="w-24 h-24 rounded-full mr-4"
        />
        <div>
          <h2 className="text-xl font-semibold mb-2">
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border p-1 rounded"
              />
            ) : (
              user.name
            )}
          </h2>
          <p className="mb-1">
            <strong>Email:</strong>{' '}
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border p-1 rounded"
              />
            ) : (
              user.email
            )}
          </p>
          <p className="mb-1">
            <strong>Address:</strong>{' '}
            {isEditing ? (
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="border p-1 rounded"
              />
            ) : (
              user.address
            )}
          </p>
          {isEditing && (
            <div className="mb-1">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Profile Picture
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-900 border rounded-lg cursor-pointer"
              />
            </div>
          )}
        </div>
      </div>
      <button
        onClick={isEditing ? handleSaveClick : handleEditClick}
        className={`px-4 py-2 rounded text-white ${
          isEditing ? 'bg-green-500' : 'bg-blue-500'
        }`}
      >
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </div>
    <div className="bg-white shadow-md rounded-lg p-6 mt-6">
      <h2 className="text-xl font-semibold mb-2">Order History</h2>
      <div className="mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search orders..."
          className="border p-2 rounded w-full"
        />
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Product
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Amount
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredOrders.map((order) => (
            <tr key={order.id}>
              <td className="px-6 py-4 whitespace-nowrap">{order.product}</td>
              <td className="px-6 py-4 whitespace-nowrap">{order.date}</td>
              <td className="px-6 py-4 whitespace-nowrap">£{order.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default UserProfile