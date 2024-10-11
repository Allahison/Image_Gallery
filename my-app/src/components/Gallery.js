import React from 'react';
import ImageCard from '../components/ImageCard';

const Gallery = ({ images }) => {
  return (
    <div className="gallery-container">
      <div className="image-grid">
        {images.map((image, index) => (
          <ImageCard key={index} image={image} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
