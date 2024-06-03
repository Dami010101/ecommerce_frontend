import React, { useState } from 'react'

// Sample initial data for products
const initialProductsData = [
  {
    id: 1,
    name: 'Product 1',
    price: 29.99,
    description: 'This is a description for Product 1',
    category: 'Category 1',
    brand: 'Brand 1',
    image: 'path/to/defaultProductImage.jpg', // Provide a default product image path
  },
  {
    id: 2,
    name: 'Product 2',
    price: 39.99,
    description: 'This is a description for Product 2',
    category: 'Category 2',
    brand: 'Brand 2',
    image: 'path/to/defaultProductImage.jpg', // Provide a default product image path
  },
];
  
const ProductProfile = () => {

  const [products, setProducts] = useState(initialProductsData);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setFormData({ ...product });
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    const updatedProduct = { ...formData, price: parseFloat(formData.price) };
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updatedProduct.image = reader.result;
        setProducts(products.map((product) => (product.id === formData.id ? updatedProduct : product)));
        setSelectedProduct(updatedProduct);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setProducts(products.map((product) => (product.id === formData.id ? updatedProduct : product)));
      setSelectedProduct(updatedProduct);
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

  const handleDeleteClick = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
    setSelectedProduct(null);
  };

  const handleCreateProduct = () => {
    const newProduct = {
      id: Date.now(),
      name: '',
      price: 0,
      description: '',
      category: '',
      brand: '',
      image: 'path/to/defaultProductImage.jpg',
    };
    setProducts([...products, newProduct]);
    setSelectedProduct(newProduct);
    setFormData(newProduct);
    setIsEditing(true);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
<div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product Profile</h1>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <div className="mb-4">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search for products"
              className="w-full p-2 border rounded"
            />
          </div>
          <h2 className="text-xl font-semibold mb-2">Products List</h2>
          <ul className="bg-white shadow-md rounded-lg p-6">
            {filteredProducts.map((product) => (
              <li key={product.id} className="mb-4 flex justify-between">
                <div onClick={() => setSelectedProduct(product)}>
                  <p className="font-semibold">{product.name}</p>
                  <p className="text-sm text-gray-600">£{product.price.toFixed(2)}</p>
                </div>
                <div>
                  <button
                    onClick={() => handleEditClick(product)}
                    className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteClick(product.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <button
            onClick={handleCreateProduct}
            className="bg-green-500 text-white px-4 py-2 rounded mt-4"
          >
            Create New Product
          </button>
        </div>
        <div className="w-full md:w-2/3 md:ml-4">
          {selectedProduct ? (
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="flex items-center mb-4">
                <img
                  src={selectedProduct.image}
                  alt="Product"
                  className="w-24 h-24 rounded mr-4"
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
                      selectedProduct.name
                    )}
                  </h2>
                  <p className="mb-1">
                    <strong>Price:</strong>{' '}
                    {isEditing ? (
                      <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="border p-1 rounded"
                      />
                    ) : (
                      `£${selectedProduct.price.toFixed(2)}`
                    )}
                  </p>
                  <p className="mb-1">
                    <strong>Description:</strong>{' '}
                    {isEditing ? (
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="border p-1 rounded w-full"
                      />
                    ) : (
                      selectedProduct.description
                    )}
                  </p>
                  <p className="mb-1">
                    <strong>Category:</strong>{' '}
                    {isEditing ? (
                      <input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="border p-1 rounded"
                      />
                    ) : (
                      selectedProduct.category
                    )}
                  </p>
                  <p className="mb-1">
                    <strong>Brand:</strong>{' '}
                    {isEditing ? (
                      <input
                        type="text"
                        name="brand"
                        value={formData.brand}
                        onChange={handleChange}
                        className="border p-1 rounded"
                      />
                    ) : (
                      selectedProduct.brand
                    )}
                  </p>
                  {isEditing && (
                    <div className="mb-1">
                      <label className="block mb-2 text-sm font-medium text-gray-900">
                        Product Image
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
                onClick={isEditing ? handleSaveClick : () => handleEditClick(selectedProduct)}
                className={`px-4 py-2 rounded text-white ${
                  isEditing ? 'bg-green-500' : 'bg-blue-500'
                }`}
              >
                {isEditing ? 'Save' : 'Edit'}
              </button>
            </div>
          ) : (
            <div className="bg-white shadow-md rounded-lg p-6">
              <p>Select a product to view or edit its profile.</p>
            </div>
          )}
        </div>
      </div>
    </div>
     )
}

export default ProductProfile