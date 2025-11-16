import React from "react";
import { Link } from "react-router-dom";
// import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
// import Signup from "../Signup/Signup";

import "./Welcome.css";

function Welcome({onLogin}) {
  return (
    <>
      
      <div className="welcome-page">
       
      <div className="welcome-container">
        {/* Left side — introduction */}
        <div className="welcome-text">
          <h1>
            Welcome to <span className="highlight">BlogifyDev!</span>
          </h1>
          <p className="text-edit">
            BlogifyDev is a dynamic platform designed for developers to share ideas, tutorials, and project insights with a vibrant community of peers. Our mission is to empower developers to express their knowledge and creativity through well-structured, interactive, and easy-to-read blogs. Whether you’re sharing your latest project, documenting a coding tutorial, or exploring innovative solutions, BlogifyDev provides the tools and audience to connect, learn, and grow as a developer. Join us and turn your coding experiences into impactful stories that inspire others in the tech community.
          </p>
          <Link to="/sign-up" className="get-started-btn">
          Get Started
          </Link>
          
        </div>

        
        </div>
      </div>
      
    </>
  );
}

export default Welcome;