
import React, { useState } from 'react';

// Initial user data
const initialUserData = {
  firstName: 'Josephine',
  lastName: 'Tom',
  email: 'josephine.tom@gmail.com',
  phoneNumber: '123-456-7890',
  sex: 'Female',
  age: 28,
  maritalStatus: 'Single',
  nationality: 'British',
  address: {
    street: '6 Olympus St',
    country: 'UK',
    state: 'England',
    city: 'London',
    postcode: 'NW1 6XE'
  },
  profilePicture: 'https://images.unsplash.com/photo-1717416699821-b911fa4fd252?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  orders: [
    { id: 1, product: 'Product 1', date: '2023-05-01', amount: 29.99 },
    { id: 2, product: 'Product 2', date: '2023-04-15', amount: 19.99 },
    { id: 3, product: 'Product 3', date: '2023-03-25', amount: 39.99 },
  ],
};

const countries = ["British", "American", "Canadian", "Australian", "Other"]; // Example list of countries

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
                `${user.firstName} ${user.lastName}`
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
                user.phoneNumber
              )}
            </p>
            <p className="mb-1">
              <strong>Sex:</strong>{' '}
              {isEditing ? (
                <div className="flex gap-3">
                  <label>
                    <input
                      type="radio"
                      name="sex"
                      value="Male"
                      checked={formData.sex === 'Male'}
                      onChange={handleChange}
                    /> Male
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="sex"
                      value="Female"
                      checked={formData.sex === 'Female'}
                      onChange={handleChange}
                    /> Female
                  </label>
                </div>
              ) : (
                user.sex
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
                user.age
              )}
            </p>
            <p className="mb-1">
              <strong>Marital Status:</strong>{' '}
              {isEditing ? (
                <div className="flex gap-3">
                  <label>
                    <input
                      type="radio"
                      name="maritalStatus"
                      value="Single"
                      checked={formData.maritalStatus === 'Single'}
                      onChange={handleChange}
                    /> Single
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="maritalStatus"
                      value="Married"
                      checked={formData.maritalStatus === 'Married'}
                      onChange={handleChange}
                    /> Married
                  </label>
                </div>
              ) : (
                user.maritalStatus
              )}
            </p>
            <p className="mb-1">
              <strong>Nationality:</strong>{' '}
              {isEditing ? (
                <select
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                  className="border p-1 rounded w-full"
                >
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              ) : (
                user.nationality
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
                    className="border p-1 rounded w-full mb-1"
                    placeholder="Street"
                  />
                  <input
                    type="text"
                    name="address.city"
                    value={formData.address.city}
                    onChange={handleChange}
                    className="border p-1 rounded w-full mb-1"
                    placeholder="City"
                  />
                  <input
                    type="text"
                    name="address.state"
                    value={formData.address.state}
                    onChange={handleChange}
                    className="border p-1 rounded w-full mb-1"
                    placeholder="State"
                  />
                  <input
                    type="text"
                    name="address.country"
                    value={formData.address.country}
                    onChange={handleChange}
                    className="border p-1 rounded w-full mb-1"
                    placeholder="Country"
                  />
                  <input
                    type="text"
                    name="address.postcode"
                    value={formData.address.postcode}
                    onChange={handleChange}
                    className="border p-1 rounded w-full"
                    placeholder="Postcode"
                  />
                </>
              ) : (
                `${user.address.street}, ${user.address.city}, ${user.address.state}, ${user.address.country}, ${user.address.postcode}`
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
  );
};

export default UserProfile;
