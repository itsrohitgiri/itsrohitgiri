import React from "react";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const navigate = useNavigate();

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length > 0 ? (
        <div>
          {cart.map((product, index) => (
            <div key={index} style={{ margin: "20px", border: "1px solid #ccc", padding: "10px" }}>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}

      <button onClick={() => navigate("/home")} style={styles.button}>
        Go back to Products
      </button>
    </div>
  );
}

// Styles for CartPage
const styles = {
  button: {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    marginTop: '20px',
    cursor: 'pointer',
    borderRadius: '5px',
  },
};

export default CartPage;
