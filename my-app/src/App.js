import React, { useState } from 'react';
import Gallery from './components/Gallery';
import UploadForm from './components/UploadForm';

const App = () => {
  const [images, setImages] = useState([]);

  const addImage = (newImage) => {
    setImages((prevImages) => [...prevImages, newImage]);
  };

  return (
    <div className="app">
      <h1>Image Gallery</h1>
      <UploadForm addImage={addImage} />
      <Gallery images={images} />
    </div>
  );
};

export default App;






