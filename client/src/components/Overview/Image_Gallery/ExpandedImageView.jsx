import React from 'react';
import CurrentImage from './CurrentImage.jsx';
import ImageIcons from './ImageIcons.jsx';
import ImageArrows from './ImageArrows.jsx';

// eslint-disable-next-line no-unused-vars
const ExpandedImageView = (props) => {

  return (
    <div>
      Expanded Image View
      <ul>
        <li><CurrentImage /></li>
        <li><ImageIcons /></li>
        <li><ImageArrows /></li>
      </ul>
    </div>
  );
};

export default ExpandedImageView;
