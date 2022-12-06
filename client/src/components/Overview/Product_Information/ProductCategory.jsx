/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

const ProductCategory = ({ productCategory }) => {
  const categoryDisplay = `Category: ${productCategory}`;

  return (
    <div>
      { categoryDisplay }
    </div>
  );
};

ProductCategory.propTypes = {
  productCategory: PropTypes.string,
};

export default ProductCategory;
