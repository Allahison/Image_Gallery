import React, { useState } from 'react';

const UploadForm = ({ addImage }) => {
  const [category, setCategory] = useState('');
  const [file, setFile] = useState(null);

  const handleUpload = (e) => {
    e.preventDefault();
    if (file && category) {
      const newImage = { src: URL.createObjectURL(file), category };
      addImage(newImage);
      setFile(null);
      setCategory('');
    }
  };

  return (
    <form className="upload-form" onSubmit={handleUpload}>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <button type="submit">Upload</button>
    </form>
  );
};

export default UploadForm;
