import React from 'react';

const ImageCard = ({ image }) => {
  return (
    <div className="image-card">
      <img className="gallery-img" src={image.src} alt={image.category} />
      <div className="image-category">{image.category}</div>
    </div>
  );
};

export default ImageCard;

