/* eslint-disable no-plusplus */
import React, { useEffect, useState } from 'react';

const SizeSelector = (
  ({
    productStyleId, setProductStyleId, productStyleName, setProductStyleName, productStyleOriginalPrice, setProductStyleOriginalPrice, productStyleSalePrice, setProductStyleSalePrice, productStylePhotos, setProductStylePhotos, productStyleSku, setProductStyleSku, productStyleSkus, setProductStyleSkus, productStyleSize, setProductStyleSize, productStyleQuantity, setProductStyleQuantity, productStyleSizes, setProductStyleSizes, productStyleQuantities, setProductStyleQuantities, undefinedSizeSubmitted, setUndefinedSizeSubmitted, quantitySelectorIsDisabled, setQuantitySelectorIsDisabled, dropdownQuantitiesArray, setDropdownQuantitiesArray, addToCartButtonIsVisible, setAddToCartButtonIsVisible, addToCartButtonIsDisabled, setAddToCartButtonIsDisabled, allQuantitiesZero, setAllQuantitiesZero, sizeSelectorIsDisabled, setSizeSelectorIsDisabled, productStyleSizeDropdownLength, setProductStyleSizeDropdownLength
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
      setProductStyleSizeDropdownLength(1);
      e.preventDefault();
    });

    if (!sizeSelectorIsDisabled) {
      return (
        <div>
          <select size={productStyleSizeDropdownLength} value={productStyleSize} onChange={(e) => { updateCurrentSize(e); }}>
            <option>Select Size</option>
            {productStyleSizes.map((size) => {
              return <option>{size}</option>;
            })}
          </select>
        </div>
      );
    }
    return (
      <div>
        <select value={productStyleSize} onChange={(e) => { updateCurrentSize(e); }} disabled>
          <option>Out of Stock</option>
          {productStyleSizes.map((size) => {
            return <option>{size}</option>;
          })}
        </select>
      </div>
    );


  });

export default SizeSelector;
