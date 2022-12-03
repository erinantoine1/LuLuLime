import React from 'react';
import DefaultImageView from './DefaultImageView.jsx';
import ExpandedImageView from './ExpandedImageView.jsx';

// eslint-disable-next-line no-unused-vars
const ImageGallery = (props) => {

  return (
    <div>
      Image Gallery
      <ol>
        <li><DefaultImageView /></li>
        <li><ExpandedImageView /></li>
      </ol>
    </div>
  );
};

export default ImageGallery;
