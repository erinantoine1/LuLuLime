import React from 'react';
import CurrentImage from './CurrentImage.jsx';
import ImageThumbnails from './ImageThumbnails.jsx';
import ImageArrows from './ImageArrows.jsx';

// eslint-disable-next-line no-unused-vars
const DefaultImageView = (props) => {

  return (
    <div>
      Default Image View
      <ul>
        <li><CurrentImage /></li>
        <li><ImageThumbnails /></li>
        <li><ImageArrows /></li>
      </ul>
    </div>
  );
};

export default DefaultImageView;
