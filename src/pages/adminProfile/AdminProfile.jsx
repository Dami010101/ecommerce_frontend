
import React, { useState } from 'react';

// Sample initial data for users
const initialUsersData = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phoneNumber: '123-456-7890',
    sex: 'Male',
    age: 35,
    maritalStatus: 'Married',
    nationality: 'American',
    address: {
      street: '123 Main St',
      city: 'Springfield',
      state: 'Illinois',
      country: 'USA',
      postcode: '62701'
    },
    profilePicture: 'path/to/defaultProfilePicture.jpg', // Provide a default profile picture path
    orders: [
      { id: 1, product: 'Product 1', date: '2023-05-01', amount: 29.99 },
      { id: 2, product: 'Product 2', date: '2023-04-15', amount: 19.99 },
      { id: 3, product: 'Product 3', date: '2023-03-25', amount: 39.99 },
    ],
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    phoneNumber: '987-654-3210',
    sex: 'Female',
    age: 28,
    maritalStatus: 'Single',
    nationality: 'British',
    address: {
      street: '456 Elm St',
      city: 'Metropolis',
      state: 'New York',
      country: 'USA',
      postcode: '10001'
    },
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
    if (name.includes('address.')) {
      const addressField = name.split('.')[1];
      setFormData({ ...formData, address: { ...formData.address, [addressField]: value } });
    } else {
      setFormData({ ...formData, [name]: value });
    }
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
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      sex: '',
      age: null,
      maritalStatus: '',
      nationality: '',
      address: {
        street: '',
        city: '',
        state: '',
        country: '',
        postcode: '',
      },
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
    `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchQuery.toLowerCase())
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
                  <p className="font-semibold">{`${user.firstName} ${user.lastName}`}</p>
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

          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
               <a
                href="ProductProfile"
                className="rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Product Profile
              </a>
        
              <a
                href="ProductDisplay"
                className="rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Order Product
              </a>
             </div>

             
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
                      <>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="border p-1 rounded mr-2"
                        />
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="border p-1 rounded"
                        />
                      </>
                    ) : (
                      `${selectedUser.firstName} ${selectedUser.lastName}`
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
                    <strong>Phone Number:</strong>{' '}
                    {isEditing ? (
                      <input
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="border p-1 rounded"
                      />
                    ) : (
                      selectedUser.phoneNumber
                    )}
                  </p>
                  <p className="mb-1">
                    <strong>Sex:</strong>{' '}
                    {isEditing ? (
                      <>
                        <label>
                          <input
                            type="radio"
                            name="sex"
                            value="Male"
                            checked={formData.sex === 'Male'}
                            onChange={handleChange}
                            className="mr-1"
                          />
                          Male
                        </label>
                        <label className="ml-4">
                          <input
                            type="radio"
                            name="sex"
                            value="Female"
                            checked={formData.sex === 'Female'}
                            onChange={handleChange}
                            className="mr-1"
                          />
                          Female
                        </label>
                      </>
                    ) : (
                      selectedUser.sex
                    )}
                  </p>
                  <p className="mb-1">
                    <strong>Age:</strong>{' '}
                    {isEditing ? (
                      <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        className="border p-1 rounded"
                      />
                    ) : (
                      selectedUser.age
                    )}
                  </p>
                  <p className="mb-1">
                    <strong>Marital Status:</strong>{' '}
                    {isEditing ? (
                      <>
                        <label>
                          <input
                            type="radio"
                            name="maritalStatus"
                            value="Single"
                            checked={formData.maritalStatus === 'Single'}
                            onChange={handleChange}
                            className="mr-1"
                          />
                          Single
                        </label>
                        <label className="ml-4">
                          <input
                            type="radio"
                            name="maritalStatus"
                            value="Married"
                            checked={formData.maritalStatus === 'Married'}
                            onChange={handleChange}
                            className="mr-1"
                          />
                          Married
                        </label>
                      </>
                    ) : (
                      selectedUser.maritalStatus
                    )}
                  </p>
                  <p className="mb-1">
                    <strong>Nationality:</strong>{' '}
                    {isEditing ? (
                      <select
                        name="nationality"
                        value={formData.nationality}
                        onChange={handleChange}
                        className="border p-1 rounded"
                      >
                        <option value="">Select Nationality</option>
                        <option value="American">American</option>
                        <option value="British">British</option>
                        <option value="Canadian">Canadian</option>
                        <option value="Australian">Australian</option>
                      </select>
                    ) : (
                      selectedUser.nationality
                    )}
                  </p>
                  <p className="mb-1">
                    <strong>Address:</strong>{' '}
                    {isEditing ? (
                      <>
                        <input
                          type="text"
                          name="address.street"
                          value={formData.address.street}
                          onChange={handleChange}
                          className="border p-1 rounded mb-1"
                          placeholder="Street"
                        />
                        <input
                          type="text"
                          name="address.city"
                          value={formData.address.city}
                          onChange={handleChange}
                          className="border p-1 rounded mb-1"
                          placeholder="City"
                        />
                        <input
                          type="text"
                          name="address.state"
                          value={formData.address.state}
                          onChange={handleChange}
                          className="border p-1 rounded mb-1"
                          placeholder="State"
                        />
                        <input
                          type="text"
                          name="address.country"
                          value={formData.address.country}
                          onChange={handleChange}
                          className="border p-1 rounded mb-1"
                          placeholder="Country"
                        />
                        <input
                          type="text"
                          name="address.postcode"
                          value={formData.address.postcode}
                          onChange={handleChange}
                          className="border p-1 rounded mb-1"
                          placeholder="Postcode"
                        />
                      </>
                    ) : (
                      `${selectedUser.address.street}, ${selectedUser.address.city}, ${selectedUser.address.state}, ${selectedUser.address.country}, ${selectedUser.address.postcode}`
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
  );
};

export default AdminProfile;

