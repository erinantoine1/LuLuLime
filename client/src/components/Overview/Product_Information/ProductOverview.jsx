import React from 'react';

const ProductOverview = ({ productOverview }) => {
  const overviewDisplay = `${productOverview}`;

  return (
    <div>
      { overviewDisplay }
    </div>
  );
};

export default ProductOverview;
