import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserAlt, FaLock, FaEnvelope } from "react-icons/fa";
import "./Signup.css";

function Signup({ onLogin }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // for Backend errors

   const handleSignup = async (e) => {
    e.preventDefault();
    if (!username || !email || !password) return;

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: username, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Signup failed");
        return;
      }
      const user = data.user || data;

      // Save token to localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(user));

      if (onLogin) onLogin(user);

      // Redirect to community page
      navigate("/community-blogs");
    } catch (err) {
      console.error(err);
      setError("Server error. Please try again later.");
    }
  };

 


  return (
    <div className="auth-container">
      <h1>Create Account</h1>
      <div className="auth-box">
        <form onSubmit={handleSignup}>
          <div className="input-group">
            <FaUserAlt className="icon" />
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
          </div>
          <div className="input-group">
            <FaEnvelope className="icon" />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="input-group">
            <FaLock className="icon" />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
            
             {error && <p className="error">{error}</p>}

          <button type="submit" className="btn">Sign Up</button>
        </form>
         
        <p>
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;



