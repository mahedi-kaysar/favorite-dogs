import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DogCard from './DogCard';

const Gallery = () => {
  const [dogs, setDogs] = useState([]);
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);

  const fetchDogs = async () => {
    const requests = Array.from({ length: 6 }, () => axios.get('https://random.dog/woof.json'));
    const responses = await Promise.all(requests);
    const newDogs = responses
      .map(response => response.data.url)
      .filter(url => url.match(/\.(jpeg|jpg|gif|png)$/)); // Only keep image URLs
    setDogs(newDogs);
  };


  useEffect(() => {
    fetchDogs();
  }, []);

  const addToFavorites = (dog) => {
    const newFavorites = [...favorites, dog];
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  return (
    <div className="gallery">
      <button onClick={fetchDogs}>Refresh</button>
      <div className="dog-grid">
        {dogs.map((dog, index) => (
          <DogCard key={index} dog={dog} addToFavorites={addToFavorites} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;