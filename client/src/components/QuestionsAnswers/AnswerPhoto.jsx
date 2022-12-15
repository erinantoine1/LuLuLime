import React, { useState } from 'react';

const AnswerPhoto = ({ photo }) => {

  const [validPhoto, setValidPhoto] = useState(true);

  const isValidURL = (urlString) => {
    try {
      return Boolean(new URL(urlString));
    } catch (e) {
      return false;
    }
  };

  return (
    isValidURL(photo) && !photo.includes('localhost') && validPhoto ? (
      <img
        src={photo}
        alt=" "
        width="100"
        height="100"
        onError={() => {
          setValidPhoto(false);
        }}
      />
    ) : null
  );
};

export default AnswerPhoto;
