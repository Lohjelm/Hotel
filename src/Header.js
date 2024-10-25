import React, { useState } from "react"; // Import useState
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Header.css'; // Import CSS for styling

const Header = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);

  return (
    <header>
      <div id="menu-bar" className="fas fa-bars"></div>
      <a href="#" className="logo">
        <span>𝓥𝓲𝓷𝓽𝓲</span>
      </a>
      <nav className="navbar">
        <Link to="/">Home</Link> {/* Link to Home Page */}
        <Link to="#services">Services</Link>
        <Link to="#contact">Contact</Link>
        <Link to="/rooms">Rooms</Link> {/* Link to Rooms Page */}
        <Link to="/about">About Us</Link> {/* Link to About Us Page */}
      </nav>
      <div className="icons">
        <i className="fas fa-search" onClick={() => setSearchVisible(!searchVisible)}></i>
        <i className="fas fa-user" onClick={() => setLoginVisible(!loginVisible)}></i>
      </div>

      {searchVisible && (
        <form action="" className="search-bar-container">
          <input type="search" id="search-bar" placeholder="search here..." />
          <label htmlFor="search-bar" className="fas fa-search"></label>
        </form>
      )}

      {loginVisible && (
        <div className="login-form-container">
          <i className="fas fa-times" onClick={() => setLoginVisible(false)}></i>
          <form action="">
            <h3>Login</h3>
            <input type="email" className="box" placeholder="enter your email" />
            <input type="password" className="box" placeholder="enter your password" />
            <input type="submit" value="Login now" className="btn" />
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
            <p>Forgot password? <a href="#">Click here</a></p>
            <p>Don't have an account? <a href="#">Register now</a></p>
          </form>
        </div>
      )}
    </header>
  );
};

export default Header;