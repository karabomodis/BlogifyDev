import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Welcome from "./pages/Welcome/Welcome";
import Blogs from "./pages/Blogs/Blogs";
import Community from "./pages/Community/Community";
import MyPosts from "./pages/MyPosts/MyPosts";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const [blogs, setBlogs] = useState([]);

   useEffect(() => {
   const savedUser = localStorage.getItem("user");
   const savedToken = localStorage.getItem("token");
   if (savedUser && savedToken) {
    setIsLoggedIn(true);
    setCurrentUser(JSON.parse(savedUser));
  }
}, []);
  
  const handleLogin = (user) =>{
     setIsLoggedIn(true);
     setCurrentUser(user);
  };  
  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser("");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} userName={currentUser?.name || ""} handleLogout={handleLogout} />

      <div className="app">
        <Routes>
          {/* Public routes */}
           <Route path="/" element={<Welcome onLogin={handleLogin} />} />
          <Route path="/sign-in" element={<Login onLogin={handleLogin} />} />
          <Route path="/sign-up" element={<Signup onLogin={handleLogin} />} />
          <Route path="/blogs" element={<Blogs />} />



  {/* Protected routes */}
  <Route
    path="/community-blogs"
    element={
      isLoggedIn ? (
        <Community currentUser={currentUser} blogs={blogs} setBlogs={setBlogs} />
      ) : (
        <Navigate to="/sign-in" />
      )
    }
  />

  <Route
    path="/my-posts"
    element={
      isLoggedIn ? (
        <MyPosts currentUser={currentUser} blogs={blogs} setBlogs={setBlogs} />
      ) : (
        <Navigate to="/sign-in" />
      )
    }
  />
  {/* Redirect unknown paths */}
  <Route path="*" element={<Navigate to="/" />} />
</Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;

