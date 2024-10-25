// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Rooms from './Rooms'; // Ensure the Rooms.js file exists
import Header from './Header'; // Ensure the Header.js file exists
import Home from './Home'; // Import your Home component
import AboutUs from './AboutUs'; // Import the AboutUs component
import Footer from './Footer';
import "./App.css";

function App() {
  return (
    <Router>
      <Header /> {/* Header containing links */}
      
      <Routes>
        <Route path="/" element={<Home />} /> {/* Link to Home Page */}
        <Route path="/rooms" element={<Rooms />} /> {/* Link to Rooms Page */}
        <Route path="/about" element={<AboutUs />} /> {/* Link to About Us Page */}
        {/* Add other routes as necessary */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
