import React, { useState } from 'react';

const Marketplace = () => {
  // Sample data for available products
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Tomatoes',
      price: 50,
      quantity: 100,
      location: 'Delhi',
      description: 'Fresh organic tomatoes from local farms.',
      sellerContact: '9876543210'
    },
    {
      id: 2,
      name: 'Potatoes',
      price: 30,
      quantity: 150,
      location: 'Pune',
      description: 'High-quality potatoes harvested recently.',
      sellerContact: '9876543211'
    },
    {
      id: 3,
      name: 'Carrots',
      price: 60,
      quantity: 50,
      location: 'Madhya Pradesh',
      description: 'Organic carrots rich in nutrients.',
      sellerContact: '9876543212'
    }
  ]);
  
  // State for search and filter
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);

  // Function to handle search input
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Function to handle product selection (for more details)
  const selectProduct = (product) => {
    setSelectedProduct(product);
  };

  // Function to handle the checkout
  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    alert('Proceeding to checkout...');
    // You can integrate checkout functionality here
  };

  // Filter products based on the search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="marketplace">
      <h2>Farmers Marketplace</h2>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by product name or location"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {/* Displaying Product List */}
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => selectProduct(product)}
            >
              <h3>{product.name}</h3>
              <p>Price: ₹{product.price}</p>
              <p>Quantity: {product.quantity}</p>
              <p>Location: {product.location}</p>
              <button onClick={(e) => {e.stopPropagation(); addToCart(product)}}>Add to Cart</button>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>

      {/* Selected Product Details */}
      {selectedProduct && (
        <div className="product-details">
          <h3>{selectedProduct.name}</h3>
          <p><strong>Description:</strong> {selectedProduct.description}</p>
          <p><strong>Price:</strong> ₹{selectedProduct.price}</p>
          <p><strong>Location:</strong> {selectedProduct.location}</p>
          <p><strong>Seller Contact:</strong> {selectedProduct.sellerContact}</p>
        </div>
      )}

      {/* Cart and Checkout */}
      <div className="cart">
        <h3>Shopping Cart</h3>
        {cart.length > 0 ? (
          <div>
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  {item.name} - ₹{item.price} x 1
                </li>
              ))}
            </ul>
            <button onClick={handleCheckout}>Proceed to Checkout</button>
          </div>
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default Marketplace;
