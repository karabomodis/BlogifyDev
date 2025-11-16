import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css"; 

function Header({ isLoggedIn, userName, handleLogout }) {
  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/welcome" className="logo-link">BlogifyDev</NavLink>
      </div>

      <nav className="nav-links">
        <NavLink to="/welcome" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
          Home
        </NavLink>

        <NavLink to="/blogs" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")} >
          Blogs
        </NavLink>

        <NavLink to={isLoggedIn ? "/community-blogs" : "/sign-in"} className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
          Community Blogs
        </NavLink>
      </nav>

      <div className="auth-buttons">
        {isLoggedIn ? (
          <>
            <span className="user-name nav-item"> {userName}</span>
            <button className="btn-green" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <NavLink to="/sign-in" className="btn-outline">Sign In</NavLink>
            <NavLink to="/sign-up" className="btn-green">Sign Up</NavLink>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;