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
    <styling.AnimatedDiv>
      <div>Add up to 5 Photos!</div>
      <div>
        Current Photos:
        {reviewForm.photos.map((photo, index) => {
          return <div key={index}>{photo}</div>;
        })}
      </div>
      {reviewForm.photos.length < 5 && (
        <div>
          <input type="text" value={photoUrl} onChange={(event) => setPhotoUrl(event.target.value)} />
          <button type="button" onClick={() => handleAddPhoto(photoUrl)}>Add Photo</button>
        </div>
      )}
    </styling.AnimatedDiv>
  );
};

export default PhotoUpload;
