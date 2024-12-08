import React from 'react';

const DogCard = ({ dog, addToFavorites }) => {
  return (
    <div className="dog-card">
      <img 
        src={dog} 
        alt="Dog" 
        loading="lazy" 
        srcSet={`
          ${dog} 300w,
          ${dog} 600w,
          ${dog} 900w
        `}
        sizes="(max-width: 600px) 300px, (max-width: 900px) 600px, 900px"
        onError={(e) => { e.target.src = 'https://via.placeholder.com/300'; }} // Fallback image
      />
      <button onClick={() => addToFavorites(dog)}>Favorite</button>
    </div>
  );
};

export default DogCard;