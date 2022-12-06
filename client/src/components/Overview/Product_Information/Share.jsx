/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-lone-blocks */
/* eslint-disable react/require-default-props */
import React from 'react';

const Share = () => {

  return (
    <div>
      <a href="http://facebook.com">
        <img src="https://cdn-icons-png.flaticon.com/32/1384/1384005.png" alt="" style={{ position: 'relative', zIndex: '50' }} />
      </a>
      <a href="http://twitter.com">
        <img src="https://cdn-icons-png.flaticon.com/32/2168/2168336.png" alt="" style={{ position: 'relative', zIndex: '50' }} />
      </a>
      <a href="http://pinterest.com">
        <img src="https://cdn-icons-png.flaticon.com/32/49/49440.png" alt="" style={{ position: 'relative', zIndex: '50' }} />
      </a>
    </div>
  );
};

export default Share;

