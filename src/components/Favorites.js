import React from 'react';

const Favorites = () => {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  return (
    <div className="favorites">
      <h1>Favorite Dogs</h1>
      <div className="dog-grid">
        {favorites.map((dog, index) => (
          <div key={index} className="dog-card">
            <img src={dog} alt="Dog" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;