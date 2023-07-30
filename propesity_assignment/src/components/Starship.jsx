// src/components/Starship.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Starship = () => {
  const [starships, setStarships] = useState([]);
  const [viewMode, setViewMode] = useState('list');

  useEffect(() => {
    fetchStarships();
  }, []);

  const fetchStarships = async () => {
    try {
      const response = await axios.get('https://swapi.dev/api/starships/');
      setStarships(response.data.results);
    } catch (error) {
      console.error('Error fetching starships:', error);
    }
  };

  const toggleViewMode = () => {
    setViewMode((prevMode) => (prevMode === 'list' ? 'grid' : 'list'));
  };

  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const listStyles = {
    display: 'flex',
    flexWrap: 'wrap', // Use flex-wrap to create multiple rows
    justifyContent: 'center', // Center cards horizontally
    listStyle: 'none',
    padding: 0,
    gap: '20px',
  };

  const itemStyles = {
    width: '200px', // Set a fixed width for each card
    backgroundColor: '#f0f0f0',
    borderRadius: '5px',
    padding: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s ease-in-out',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
  };

  const imageStyles = {
    width: '100%',
    height: 'auto',
    borderRadius: '5px',
  };

  const headingStyles = {
    textAlign: 'center',
    fontSize: '1.5rem',
    marginBottom: '1rem',
  };

  const buttonStyles = {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease-in-out',
  };

  const contentStyles = {
    textAlign: 'center',
    flexGrow: 1, // To allow the content to grow within the card and avoid overflow
  };

  return (
    <div style={containerStyles}>
      <h2 style={headingStyles}>Starships</h2>
      <button onClick={toggleViewMode} style={buttonStyles}>
        {viewMode === 'list' ? 'Switch to Grid View' : 'Switch to List View'}
      </button>
      {viewMode === 'list' ? (
        <ul style={listStyles} className="starships-list">
          {starships.map((starship) => (
            <li key={starship.url} style={itemStyles}>
              <img
                src={`https://picsum.photos/200/300?random=${Math.random()}`} // Random placeholder image URL from https://picsum.photos/
                alt={starship.name}
                style={imageStyles}
              />
              <div style={contentStyles}>
                <h3>{starship.name}</h3>
                <p>Model: {starship.model}</p>
                <p>Hyperdrive Rating: {starship.hyperdrive_rating}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div style={listStyles} className="starships-grid">
          {starships.map((starship) => (
            <div key={starship.url} style={itemStyles}>
              <img
                src={`https://picsum.photos/200/300?random=${Math.random()}`} // Random placeholder image URL from https://picsum.photos/
                alt={starship.name}
                style={imageStyles}
              />
              <div style={contentStyles}>
                <h3>{starship.name}</h3>
                <p>Model: {starship.model}</p>
                <p>Hyperdrive Rating: {starship.hyperdrive_rating}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Starship;
