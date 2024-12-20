import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import Link for navigation

function LoginPage() {
  const [Username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logged in with:", { Username, password }); 
    navigate("/home");
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
          Login
        </button>
      </form>

      <div>
        <p>Don't have an account?</p>
        <Link 
          to="/register" // Navigate to the Register page
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            backgroundColor: 'green',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
            marginTop: '10px',
            transition: 'background-color 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = 'darkgreen'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'green'}
        >
          Register
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
