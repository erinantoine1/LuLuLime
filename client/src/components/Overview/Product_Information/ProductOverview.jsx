/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

const ProductOverview = ({ productDescription }) => {
  const overviewDisplay = `Overview: ${productDescription}`;

  return (
    <div>
      { overviewDisplay }
    </div>
  );
};

ProductOverview.propTypes = {
  productDescription: PropTypes.string,
};

export default ProductOverview;
