import React from 'react';

const SizeSelector = (
  ({
    productStyleId, setProductStyleId, productStyleName, setProductStyleName, productStyleOriginalPrice, setProductStyleOriginalPrice, productStyleSalePrice, setProductStyleSalePrice, productStylePhotos, setProductStylePhotos, productStyleSku, setProductStyleSku, productStyleSkus, setProductStyleSkus, productStyleSize, setProductStyleSize, productStyleQuantity, setProductStyleQuantity, productStyleSizes, setProductStyleSizes, productStyleQuantities, setProductStyleQuantities, undefinedSizeSubmitted, setUndefinedSizeSubmitted, quantitySelectorIsDisabled, setQuantitySelectorIsDisabled, dropdownQuantitiesArray, setDropdownQuantitiesArray
  }) => {
    const updateCurrentSize = ((e) => {
      setProductStyleSize(e.target.value);

      const skuKeys = Object.keys(productStyleSkus);

      if (e.target.value === 'XS') {
        setProductStyleSku(skuKeys[0]);
      }
      if (e.target.value === 'S') {
        setProductStyleSku(skuKeys[1]);
      }
      if (e.target.value === 'M') {
        setProductStyleSku(skuKeys[2]);
      }
      if (e.target.value === 'L') {
        setProductStyleSku(skuKeys[3]);
      }
      if (e.target.value === 'XL') {
        setProductStyleSku(skuKeys[4]);
      }
      if (e.target.value === 'XXL') {
        setProductStyleSku(skuKeys[5]);
      }

      setUndefinedSizeSubmitted(false);
      e.preventDefault();
    });

    return (
      <div>
        <select value={productStyleSize} onChange={(e) => { updateCurrentSize(e); }}>
          <option>Select Size</option>
          {productStyleSizes.map((size) => {
            return <option>{size}</option>;
          })}
        </select>
      </div>
    );
  });

export default SizeSelector;
