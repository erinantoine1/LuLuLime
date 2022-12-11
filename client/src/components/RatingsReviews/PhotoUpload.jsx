import React, { useState, useEffect } from 'react';
import * as styling from './Styling/Styling.js';

const PhotoUpload = ({ reviewForm, setReviewForm }) => {

  const [photoUrl, setPhotoUrl] = useState('');

  const handleAddPhoto = (url) => {
    const newPhotos = reviewForm.photos.map((photo) => {
      return photo;
    });
    newPhotos.push(url);
    setReviewForm({ ...reviewForm, photos: newPhotos });
    setPhotoUrl('');
  };

  return (
    <div>
      <input type="text" value={photoUrl} onChange={(event) => setPhotoUrl(event.target.value)} />
      {reviewForm.photos.length < 5 && <button type="button" onClick={() => handleAddPhoto(photoUrl)}>Add Photo</button>}
    </div>
  );
};

export default PhotoUpload;
