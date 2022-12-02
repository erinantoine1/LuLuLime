import React from 'react';
import SizeSelector from './SizeSelector.jsx';
import QuantitySelector from './QuantitySelector.jsx';

// eslint-disable-next-line no-unused-vars
const AddToCart = (props) => {

  return (
    <div>
      Add to Cart
      <ol>
        <li><QuantitySelector /></li>
        <li><SizeSelector /></li>
      </ol>
    </div>
  );
};

export default AddToCart;
