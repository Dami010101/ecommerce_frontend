import React, { useState } from 'react'

// Sample initial data for users
const initialUsersData = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    address: '123 Main St, Springfield, USA',
    profilePicture: 'path/to/defaultProfilePicture.jpg', // Provide a default profile picture path
    orders: [
      { id: 1, product: 'Product 1', date: '2023-05-01', amount: 29.99 },
      { id: 2, product: 'Product 2', date: '2023-04-15', amount: 19.99 },
      { id: 3, product: 'Product 3', date: '2023-03-25', amount: 39.99 },
    ],
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    address: '456 Elm St, Metropolis, USA',
    profilePicture: 'path/to/defaultProfilePicture.jpg', // Provide a default profile picture path
    orders: [
      { id: 1, product: 'Product A', date: '2023-02-01', amount: 49.99 },
      { id: 2, product: 'Product B', date: '2023-01-15', amount: 59.99 },
      { id: 3, product: 'Product C', date: '2023-01-05', amount: 69.99 },
    ],
  },
  // Add more users as needed
];

  

const AdminProfile = () => {

  const [users, setUsers] = useState(initialUsersData);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setFormData({ ...user });
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedUser = { ...formData, profilePicture: reader.result };
        setUsers(users.map((user) => (user.id === formData.id ? updatedUser : user)));
        setSelectedUser(updatedUser);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setUsers(users.map((user) => (user.id === formData.id ? formData : user)));
      setSelectedUser(formData);
    }
    setIsEditing(false);
    setSelectedFile(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleDeleteClick = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
    setSelectedUser(null);
  };

  const handleCreateUser = () => {
    const newUser = {
      id: Date.now(),
      name: '',
      email: '',
      address: '',
      profilePicture: 'path/to/defaultProfilePicture.jpg',
      orders: [],
    };
    setUsers([...users, newUser]);
    setSelectedUser(newUser);
    setFormData(newUser);
    setIsEditing(true);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );



  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Profile</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search users..."
          className="border p-2 rounded w-full"
        />
      </div>
      <div className="flex">
        <div className="w-1/3">
          <h2 className="text-xl font-semibold mb-2">Users List</h2>
          <ul className="bg-white shadow-md rounded-lg p-6">
            {filteredUsers.map((user) => (
              <li key={user.id} className="mb-4 flex justify-between">
                <div onClick={() => setSelectedUser(user)}>
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-sm text-gray-600">{user.email}</p>
                </div>
                <div>
                  <button
                    onClick={() => handleEditClick(user)}
                    className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteClick(user.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <button
            onClick={handleCreateUser}
            className="bg-green-500 text-white px-4 py-2 rounded mt-4"
          >
            Create New User
          </button>
        </div>
        <div className="w-2/3 ml-4">
          {selectedUser ? (
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="flex items-center mb-4">
                <img
                  src={selectedUser.profilePicture}
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
                      selectedUser.name
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
                      selectedUser.email
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
                      selectedUser.address
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
                onClick={isEditing ? handleSaveClick : () => handleEditClick(selectedUser)}
                className={`px-4 py-2 rounded text-white ${
                  isEditing ? 'bg-green-500' : 'bg-blue-500'
                }`}
              >
                {isEditing ? 'Save' : 'Edit'}
              </button>

              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Orders</h3>
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="border-b p-2">Product</th>
                      <th className="border-b p-2">Date</th>
                      <th className="border-b p-2">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedUser.orders.map((order) => (
                      <tr key={order.id}>
                        <td className="border-b p-2">{order.product}</td>
                        <td className="border-b p-2">{order.date}</td>
                        <td className="border-b p-2">£{order.amount.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="bg-white shadow-md rounded-lg p-6">
              <p>Select a user to view or edit their profile.</p>
            </div>
          )}
        </div>
      </div>
    </div>
    )
}

export default AdminProfile