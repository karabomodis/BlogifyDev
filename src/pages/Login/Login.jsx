import React,{useState} from "react";
import { Link } from "react-router-dom";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


import "./Login.css";


function Login({ onLogin }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); // email for login
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLoginClick = async (e) => {
    e.preventDefault();
    if (!email || !password) return;

    try {
      const response = await fetch("https://blogifydev-backend-1.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Login failed");
        return;
      }  

      const user = data.user || {};

      // Save token and user info in localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(user));

      
      if (onLogin) onLogin(user);

      navigate("/community-blogs");
    } catch (err) {
      console.error(err);
      setError("Server error. Please try again later.");
    }
  };
  return (
    <>
     
      <div className="auth-container">
        <h1>Welcome Back</h1>
        <div className="auth-box">
          <div className="input-group">
            <FaUserAlt className="icon" />
            <input type="text" placeholder="Username or Email" value={email}onChange={(e)=> setEmail(e.target.value)}  />
          </div>
          <div className="input-group">
            <FaLock className="icon" />
            <input type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} />
          </div>
            
             {error && <p className="error">{error}</p>}

          <button className="btn" onClick={handleLoginClick}>Login</button>
          <p>
            Don't have an account? <Link to="/sign-up">Sign up</Link>
          </p>
        </div>
      </div>
     
    </>
  );
}

export default Login;