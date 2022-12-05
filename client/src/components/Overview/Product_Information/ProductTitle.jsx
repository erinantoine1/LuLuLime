/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

const ProductTitle = ({ productTitle }) => {

  return (
    <div>
      { productTitle }
    </div>
  );
};

ProductTitle.propTypes = {
  productTitle: PropTypes.string,
};

export default ProductTitle;
