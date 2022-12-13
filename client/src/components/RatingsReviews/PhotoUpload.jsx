import React, { useState, useEffect } from 'react';
import * as styling from './Styling/Styling.js';

const PhotoUpload = ({ reviewForm, setReviewForm }) => {

  const [photoUrl, setPhotoUrl] = useState('');
  const [photoError, setPhotoError] = useState(false);

  const handleAddPhoto = (url) => {
    const newPhotos = reviewForm.photos.map((photo) => {
      return photo;
    });
    newPhotos.push(url);
    setReviewForm({ ...reviewForm, photos: newPhotos });
    setPhotoUrl('');
    photoError && setPhotoError(false);
  };

  return (
    <styling.PhotoUploadContainer>
      <styling.PhotoAreaHeader>Add Up To 5 Photos</styling.PhotoAreaHeader>
      <styling.UploadedPhotosContainer>
        {reviewForm.photos.map((photo, index) => {
          return (
            <styling.UploadedPhoto src={photo} alt="" />
          );
        })}
      </styling.UploadedPhotosContainer>
      {reviewForm.photos.length < 5 && (
        <styling.AddPhotoBar>
          <styling.PhotoInput type="text" placeholder="Please enter a valid URL" value={photoUrl} onChange={(event) => setPhotoUrl(event.target.value)} />
          <styling.Buttons type="button" onClick={() => photoUrl.includes('.') ? handleAddPhoto(photoUrl) : setPhotoError(true)}>Add Photo</styling.Buttons>
        </styling.AddPhotoBar>
      )}
      {photoError && <styling.PhotoError>Please Enter A Valid URL</styling.PhotoError>}
    </styling.PhotoUploadContainer>
  );
};

export default PhotoUpload;
