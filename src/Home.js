// Home.js
import React from 'react';
import './Home.css'; // Import CSS for styling
import HeroVideo from './HeroVideo.mp4'; // Import the video file
import AboutUs from './AboutUs'; // Import the AboutUs component
import Rooms from './Rooms';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section">
        <video autoPlay loop muted className="background-video">
          <source src={HeroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div> {/* Overlay for better text visibility */}
        <div className="hero-content">
          <h1>𝓥𝓲𝓷𝓽𝓲</h1>
          <p>Experience luxury and comfort like never before.</p>
          <button className="hbtn">Book Now</button>
        </div>
      </div>
      <Rooms />
      {/* Services Section */}
      <section className="services" id="services">
        <h3>Our Services</h3>
        <div className="service-list">
          <div className="service-item">
            <h4>Luxurious Rooms</h4>
            <p>Experience the finest in comfort and style with our beautifully appointed rooms.</p>
          </div>
          <div className="service-item">
            <h4>Fine Dining</h4>
            <p>Savor exquisite culinary creations from our award-winning chefs.</p>
          </div>
          <div className="service-item">
            <h4>Spa and Wellness</h4>
            <p>Relax and rejuvenate with our full-service spa and wellness programs.</p>
          </div>
          <div className="service-item">
            <h4>Event Spaces</h4>
            <p>Host unforgettable events in our elegant venues equipped with the latest technology.</p>
          </div>
        </div>
      </section>


      {/* Gallery Section */}
      <section className="gallery" id="gallery">
        <h3>Gallery</h3>
        <div className="gallery-grid">
          <img src="https://via.placeholder.com/300" alt="Gallery Image 1" />
          <img src="https://via.placeholder.com/300" alt="Gallery Image 2" />
          <img src="https://via.placeholder.com/300" alt="Gallery Image 3" />
          <img src="https://via.placeholder.com/300" alt="Gallery Image 4" />
          <img src="https://via.placeholder.com/300" alt="Gallery Image 5" />
          <img src="https://via.placeholder.com/300" alt="Gallery Image 6" />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials" id="testimonials">
        <h3>What Our Guests Say</h3>
        <div className="testimonial-list">
          <blockquote>
            "The service was outstanding! I felt pampered throughout my stay." - John Doe
          </blockquote>
          <blockquote>
            "An exquisite experience! The views from my room were breathtaking." - Jane Smith
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default Home;
