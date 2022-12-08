import React from 'react';

const ProductOverview = ({ productOverview }) => {
  const overviewDisplay = `Overview: ${productOverview}`;

  return (
    <div>
      { overviewDisplay }
    </div>
  );
};

export default ProductOverview;
