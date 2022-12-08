import React from 'react';

const ProductCategory = ({ productCategory }) => {
  const categoryDisplay = `Category: ${productCategory}`;

  return (
    <div>
      { categoryDisplay }
    </div>
  );
};

export default ProductCategory;
