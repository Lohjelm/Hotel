import React, { useState } from 'react';
import './Rooms.css'; // Include your own styles

const Rooms = () => {
  // Sample data for rooms
  const [rooms] = useState([
    {
      id: 1,
      name: "Deluxe Room",
      price: 150,
      services: ["Free Wi-Fi", "Air Conditioning", "Room Service", "Mini Bar"],
      image: "https://via.placeholder.com/300x200?text=Deluxe+Room"
    },
    {
      id: 2,
      name: "Executive Suite",
      price: 250,
      services: ["Free Wi-Fi", "Air Conditioning", "Jacuzzi", "Room Service"],
      image: "https://via.placeholder.com/300x200?text=Executive+Suite"
    },
    {
      id: 3,
      name: "Family Room",
      price: 200,
      services: ["Free Wi-Fi", "Air Conditioning", "Kitchenette", "Room Service"],
      image: "https://via.placeholder.com/300x200?text=Family+Room"
    },
    {
      id: 4,
      name: "Standard Room",
      price: 100,
      services: ["Free Wi-Fi", "Air Conditioning"],
      image: "https://via.placeholder.com/300x200?text=Standard+Room"
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  // Filter rooms based on search query
  const filteredRooms = rooms.filter(room => 
    room.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="rooms-page">
      <h1>Available Rooms</h1>
      <input 
        type="text" 
        placeholder="Search for rooms..." 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} 
        className="search-bar"
      />

      <div className="rooms-container">
        {filteredRooms.length > 0 ? (
          filteredRooms.map(room => (
            <div key={room.id} className="room-card">
              <img src={room.image} alt={room.name} />
              <h3>{room.name}</h3>
              <p>Price: ${room.price} / night</p>
              <h4>Services:</h4>
              <ul>
                {room.services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
              <button className="btn">Book Now</button>
            </div>
          ))
        ) : (
          <p>No rooms found matching your search.</p>
        )}
      </div>
    </div>
  );
};

export default Rooms;
