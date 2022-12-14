import React from 'react';

const AnswerPhoto = ({ photo }) => {

  const isValidURL = (urlString) => {
    try {
      return Boolean(new URL(urlString));
    } catch (e) {
      return false;
    }
  };

  return (
    isValidURL(photo) && !photo.includes('localhost') ? (
      <img
        src={photo}
        alt=" "
        width="100"
        height="100"
      />
    ) : null
  );
};

export default AnswerPhoto;
