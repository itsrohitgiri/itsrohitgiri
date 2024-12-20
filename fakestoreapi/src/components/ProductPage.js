import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ProductPage() {
  const { productId } = useParams(); // Get product ID from the URL
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  // Fetch product details when productId changes
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [productId]);

  if (!product) {
    return <div>Loading product details...</div>;
  }

  return (
    <div>
      <button onClick={() => navigate("/home")} style={styles.backButton}>Back to Products</button>
      <div style={styles.productDetail}>
        <h3>{product.title}</h3>
        <img src={product.image} alt={product.title} style={styles.productImage} />
        <p>{product.description}</p>
        <p><strong>Price:</strong> ${product.price}</p>
        <button style={styles.addToCartButton}>Add to Cart</button>
      </div>
    </div>
  );
}

const styles = {
  productDetail: {
    textAlign: 'center',
    marginTop: '20px',
  },
  productImage: {
    width: '200px',
    height: '200px',
    objectFit: 'cover',
    marginBottom: '10px',
  },
  addToCartButton: {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    cursor: 'pointer',
    borderRadius: '5px',
    marginTop: '10px',
  },
  backButton: {
    backgroundColor: 'gray',
    color: 'white',
    padding: '10px 20px',
    cursor: 'pointer',
    borderRadius: '5px',
    marginTop: '20px',
  },
};

export default ProductPage;
