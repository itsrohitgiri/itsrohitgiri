import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function RegisterPage() {
  const [Username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    
    console.log("Registered with:", { Username, password });
    navigate("/"); // Redirect to login after registration
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Username:</label>
          <input
            type="Username"
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{
              padding: '8px',
              margin: '5px 0',
              width: '100%',
              borderRadius: '5px',
              border: '1px solid #ccc'
            }}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              padding: '8px',
              margin: '5px 0',
              width: '100%',
              borderRadius: '5px',
              border: '1px solid #ccc'
            }}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={{
              padding: '8px',
              margin: '5px 0',
              width: '100%',
              borderRadius: '5px',
              border: '1px solid #ccc'
            }}
          />
        </div>
        <button 
          type="submit"
          style={{
            backgroundColor: 'blue',
            color: 'white',
            border: '2px solid blue',
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            borderRadius: '5px',
            transition: 'background-color 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = 'darkblue'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'blue'}
        >
          Register
        </button>
      </form>
      <p>Already have an account?</p>
      <nav>
        <Link to="/" style={{ textDecoration: 'none', color: 'blue' }}>Login</Link>
      </nav>
    </div>
  );
}

export default RegisterPage;
