import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch products from the API when the button is clicked
  const fetchProducts = () => {
    setLoading(true); // Show loading state
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  // Handle adding product to cart
  const handleAddToCart = (product) => {
    setCart([...cart, product]); // Add product to cart state
    alert(`${product.title} has been added to your cart!`); // Use template literals correctly
  };  

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated"); // Remove authentication status
    navigate("/login"); // Redirect to login page
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav style={styles.navbar}>
        <div style={styles.navItem} onClick={() => navigate("/home")}>Home</div>
        <div style={styles.navItem} onClick={() => navigate("/cart")}>Cart</div>
        <div style={styles.navItem} onClick={handleLogout}>Logout</div>
        <div style={styles.navItem} onClick={fetchProducts}>Load Products</div>
      </nav>

      {loading && <div>Loading products...</div> }
      
      {error && <div>Error: {error}</div>}
     
      <div>
        {products.map((product) => (
         
          <div key={product.id} style={{ margin: "20px", border: "1px solid #ccc", padding: "10px" }}>
            <h2>Products</h2>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button
              onClick={() => handleAddToCart(product)}
              style={{
                backgroundColor: 'blue',
                color: 'white',
                padding: '10px 20px',
                cursor: 'pointer',
                borderRadius: '5px',
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div>
        <button
          onClick={() => navigate("/cart")}
          style={{
            backgroundColor: 'green',
            color: 'white',
            padding: '10px 20px',
            marginTop: '20px',
            cursor: 'pointer',
            borderRadius: '5px',
          }}
        >
          View Cart ({cart.length})
        </button>
      </div>
    </div>
  );
}

// Styles for Navbar
const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: '#007BFF',
    padding: '10px 0',
    color: 'white',
    marginBottom: '20px',
    fontSize: '18px',
  },
  navItem: {
    cursor: 'pointer',
    padding: '10px 20px',
    fontSize: '16px',
    textAlign: 'center',
  },
};

export default HomePage;