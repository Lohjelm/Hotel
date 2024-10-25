import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/rooms">Rooms</Link> {/* Link to Rooms Page */}
        <Link to="#contact">Contact</Link>
      </nav>
      <p>© 2024 𝓥𝓲𝓷𝓽𝓲. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
