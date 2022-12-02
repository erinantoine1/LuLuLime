import React from 'react';
import ProductTitle from './ProductTitle.jsx';
import StarRating from './StarRating.jsx';
import ProductCategory from './ProductCategory.jsx';
import ProductPrice from './ProductPrice.jsx';
import ProductOverview from './ProductOverview.jsx';
import Share from './Share.jsx';

// eslint-disable-next-line no-unused-vars
const ProductInformation = (props) => {

  return (
    <div>
      Product Information
      <ul>
        <li><ProductTitle /></li>
        <li><StarRating /></li>
        <li><ProductCategory /></li>
        <li><ProductPrice /></li>
        <li><ProductOverview /></li>
        <li><Share /></li>
      </ul>
    </div>
  );
};

export default ProductInformation;
