import React, { useState } from 'react'

const SuperAdminProfile = () => {
    const [superAdmin, setSuperAdmin] = useState({
        id: 0,
        firstName: 'SuperAdmin',
        lastName: 'User',
        email: 'superadmin@example.com',
        phoneNumber: '1234567890',
        sex: 'Male',
        age: 30,
        maritalStatus: 'Single',
        nationality: 'American',
        address: {
          street: '123 SuperAdmin St',
          city: 'SuperAdmin City',
          state: 'SuperAdmin State',
          country: 'SuperAdmin Country',
          postcode: '12345',
        },
        profilePicture: 'https://via.placeholder.com/150',
      });
    
      const [users, setUsers] = useState([
        {
          id: 1,
          firstName: 'John',
          lastName: 'Doe',
          email: 'john.doe@example.com',
          phoneNumber: '9876543210',
          sex: 'Male',
          age: 25,
          maritalStatus: 'Single',
          nationality: 'American',
          address: {
            street: '456 User St',
            city: 'User City',
            state: 'User State',
            country: 'User Country',
            postcode: '67890',
          },
          profilePicture: 'https://via.placeholder.com/150',
        },
        // Add more user objects here
      ]);

      
    
      const [searchQuery, setSearchQuery] = useState('');
      const [selectedUser, setSelectedUser] = useState(null);
      const [isViewing, setIsViewing] = useState(false);
      const [isEditing, setIsEditing] = useState(false);
      const [formData, setFormData] = useState({});
      const [isEditingSuperAdmin, setIsEditingSuperAdmin] = useState(false);
    
      const handleSearchChange = (e) => setSearchQuery(e.target.value);
    
      const handleEditClick = (user) => {
        setSelectedUser(user);
        setFormData(user);
        setIsEditing(true);
      };
    
      const handleViewClick = (user) => {
        setSelectedUser(user);
        setIsViewing(true);
      };
    
      const handleSuperAdminEditClick = () => {
        setFormData(superAdmin);
        setIsEditingSuperAdmin(true);
      };
    
      const handleSaveClick = () => {
        if (isEditingSuperAdmin) {
          setSuperAdmin(formData);
          setIsEditingSuperAdmin(false);
        } else {
          if (formData.id === undefined) {
            // New user case
            const newUser = { ...formData, id: Date.now() };
            setUsers([...users, newUser]);
          } else {
            // Existing user case
            setUsers(users.map((user) => (user.id === formData.id ? formData : user)));
          }
          setSelectedUser(null);
          setIsEditing(false);
        }
      };
    
      const handleDeleteClick = (id) => setUsers(users.filter((user) => user.id !== id));
    
      const handleCreateUser = () => {
        const newUser = {
          id: undefined,
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          sex: '',
          age: '',
          maritalStatus: '',
          nationality: '',
          address: {
            street: '',
            city: '',
            state: '',
            country: '',
            postcode: '',
          },
          profilePicture: 'https://via.placeholder.com/150',
        };
        setSelectedUser(newUser);
        setFormData(newUser);
        setIsEditing(true);
      };
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.includes('address.')) {
          const key = name.split('.')[1];
          setFormData({ ...formData, address: { ...formData.address, [key]: value } });
        } else {
          setFormData({ ...formData, [name]: value });
        }
      };
    
      const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (upload) => {
            setFormData({ ...formData, profilePicture: upload.target.result });
          };
          reader.readAsDataURL(file);
        }
      };
    
      const filteredUsers = users.filter((user) =>
        `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchQuery.toLowerCase())
      );
  return (
<div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4"> Super Admin Profile</h1>
      <div className="bg-white shadow-md rounded-lg p-4 mb-8">
        <div className="flex items-center mb-4">
          <img
            src={superAdmin.profilePicture}
            alt="Profile"
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h2 className="text-lg font-semibold">
              {superAdmin.firstName} {superAdmin.lastName}
            </h2>
            <p className="text-gray-600">{superAdmin.email}</p>
          </div>
        </div>
        <div>
          <p className="mb-1">
            <strong>Phone Number:</strong> {superAdmin.phoneNumber}
          </p>
          <p className="mb-1">
            <strong>Sex:</strong> {superAdmin.sex}
          </p>
          <p className="mb-1">
            <strong>Age:</strong> {superAdmin.age}
          </p>
          <p className="mb-1">
            <strong>Marital Status:</strong> {superAdmin.maritalStatus}
          </p>
          <p className="mb-1">
            <strong>Nationality:</strong> {superAdmin.nationality}
          </p>
          <p className="mb-1">
            <strong>Address:</strong> {`${superAdmin.address.street}, ${superAdmin.address.city}, ${superAdmin.address.state}, ${superAdmin.address.country}, ${superAdmin.address.postcode}`}
          </p>
        </div>
        <button
          onClick={handleSuperAdminEditClick}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        >
          Edit Profile
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

              <a
                href="OrderList"
                className="rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Order List
              </a>
      </div>


      </div>

      <h2 className="text-xl font-bold mb-4">User Management</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search Users"
          value={searchQuery}
          onChange={handleSearchChange}
          className="border p-2 rounded w-full"
        />
      </div>

      <div className="mb-4">
        <button
          onClick={handleCreateUser}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Create New User
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredUsers.map((user) => (
          <div key={user.id} className="bg-white shadow-md rounded-lg p-4">
            <div className="flex items-center mb-4">
              <img
                src={user.profilePicture}
                alt="Profile"
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h2 className="text-lg font-semibold">
                  {user.firstName} {user.lastName}
                </h2>
                <p className="text-gray-600">{user.email}</p>
              </div>
            </div>
            <button
              onClick={() => handleViewClick(user)}
              className="bg-gray-500 text-white px-4 py-2 rounded mt-2 mr-2"
            >
              View
            </button>
            <button
              onClick={() => handleEditClick(user)}
              className="bg-blue-500 text-white px-4 py-2 rounded mt-2 mr-2"
            >
              Edit
            </button>
            <button
              onClick={() => handleDeleteClick(user.id)}
              className="bg-red-500 text-white px-4 py-2 rounded mt-2"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {(isEditing || isEditingSuperAdmin) && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl overflow-y-auto max-h-full">
            <h2 className="text-xl font-bold mb-4">
              {isEditingSuperAdmin ? 'Edit SuperAdmin Profile' : 'Edit User'}
            </h2>
            <div className="flex items-center mb-4">
              <img
                src={formData.profilePicture}
                alt="Profile"
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h2 className="text-lg font-semibold">
                  {formData.firstName} {formData.lastName}
                </h2>
              </div>
            </div>
            <div>
              <p className="mb-1">
                <strong>First Name:</strong>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="border p-1 rounded w-full"
                />
              </p>
              <p className="mb-1">
                <strong>Last Name:</strong>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="border p-1 rounded w-full"
                />
              </p>
              <p className="mb-1">
                <strong>Email:</strong>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border p-1 rounded w-full"
                />
              </p>
              <p className="mb-1">
                <strong>Phone Number:</strong>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="border p-1 rounded w-full"
                />
              </p>
              <p className="mb-1">
                <strong>Sex:</strong>
                <select
                  name="sex"
                  value={formData.sex}
                  onChange={handleChange}
                  className="border p-1 rounded w-full"
                >
                  <option value="">Select Sex</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </p>
              <p className="mb-1">
                <strong>Age:</strong>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="border p-1 rounded w-full"
                />
              </p>
              <p className="mb-1">
                <strong>Marital Status:</strong>
                <select
                  name="maritalStatus"
                  value={formData.maritalStatus}
                  onChange={handleChange}
                  className="border p-1 rounded w-full"
                >
                  <option value="">Select Marital Status</option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                </select>
              </p>
              <p className="mb-1">
                <strong>Nationality:</strong>
                <select
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                  className="border p-1 rounded w-full"
                >
                  <option value="">Select Nationality</option>
                  <option value="American">American</option>
                  <option value="British">British</option>
                  <option value="Canadian">Canadian</option>
                  <option value="Australian">Australian</option>
                </select>
              </p>
              <p className="mb-1">
                <strong>Address:</strong>
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
              </p>
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
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleSaveClick}
                className="bg-green-500 text-white px-4 py-2 rounded mt-4 mr-2"
              >
                Save
              </button>
              <button
                onClick={() => {
                  setIsEditing(false);
                  setIsEditingSuperAdmin(false);
                  setSelectedUser(null);
                }}
                className="bg-gray-500 text-white px-4 py-2 rounded mt-4"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {isViewing && selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl overflow-y-auto max-h-full">
            <h2 className="text-xl font-bold mb-4">View User</h2>
            <div className="flex items-center mb-4">
              <img
                src={selectedUser.profilePicture}
                alt="Profile"
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h2 className="text-lg font-semibold">
                  {selectedUser.firstName} {selectedUser.lastName}
                </h2>
              </div>
            </div>
            <div>
              <p className="mb-1">
                <strong>Email:</strong> {selectedUser.email}
              </p>
              <p className="mb-1">
                <strong>Phone Number:</strong> {selectedUser.phoneNumber}
              </p>
              <p className="mb-1">
                <strong>Sex:</strong> {selectedUser.sex}
              </p>
              <p className="mb-1">
                <strong>Age:</strong> {selectedUser.age}
              </p>
              <p className="mb-1">
                <strong>Marital Status:</strong> {selectedUser.maritalStatus}
              </p>
              <p className="mb-1">
                <strong>Nationality:</strong> {selectedUser.nationality}
              </p>
              <p className="mb-1">
                <strong>Address:</strong> {`${selectedUser.address.street}, ${selectedUser.address.city}, ${selectedUser.address.state}, ${selectedUser.address.country}, ${selectedUser.address.postcode}`}
              </p>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setIsViewing(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded mt-4"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
      )
}

export default SuperAdminProfile