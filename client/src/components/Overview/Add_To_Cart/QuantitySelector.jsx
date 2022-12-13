/* eslint-disable prefer-const */
/* eslint-disable no-plusplus */
import React, { useState, useEffect } from 'react';

const QuantitySelector = (
  ({
    productStyleId, setProductStyleId, productStyleName, setProductStyleName, productStyleOriginalPrice, setProductStyleOriginalPrice, productStyleSalePrice, setProductStyleSalePrice, productStylePhotos, setProductStylePhotos, productStyleSku, setProductStyleSku, productStyleSkus, setProductStyleSkus, productStyleSize, setProductStyleSize, productStyleQuantity, setProductStyleQuantity, productStyleSizes, setProductStyleSizes, productStyleQuantities, setProductStyleQuantities, undefinedSizeSubmitted, setUndefinedSizeSubmitted, quantitySelectorIsDisabled, setQuantitySelectorIsDisabled, dropdownQuantitiesArray, setDropdownQuantitiesArray, setAddToCartButtonIsVisible, addToCartButtonIsDisabled, setAddToCartButtonIsDisabled, allQuantitiesZero, setAllQuantitiesZero, addToCartButtonIsVisible, sizeSelectorIsDisabled, setSizeSelectorIsDisabled, productStyleSizeDropdownLength, setProductStyleSizeDropdownLength
  }) => {
    let nonZeroCount = 0;
    let currentMaxQuantity;

    useEffect(() => {
      if (productStyleQuantity !== 0) {
        nonZeroCount++;
        setAllQuantitiesZero(false);
        setQuantitySelectorIsDisabled(false);
      }
      for (let i = 0; i < productStyleSizes.length; i++) {
        // console.log('size array @ [i]: ', productStyleSizes[i]);
        // console.log('size: ', productStyleSize);
        if (productStyleSizes[i] === productStyleSize) {
          // console.log(productStyleQuantities[i]);
          if (productStyleQuantities[i] <= 15) {
            // console.log(productStyleQuantities[i]);
            currentMaxQuantity = productStyleQuantities[i];
          } else if (productStyleQuantities[i] > 15) {
            currentMaxQuantity = 15;
          }
        }
      }

      // console.log('max quantity for size: ', currentMaxQuantity);
      const tempArray = [];
      for (let i = 1; i <= currentMaxQuantity; i++) {
        tempArray.push(i);
      }
      setDropdownQuantitiesArray(tempArray);
      // nonZeroCount = 0;
      if (nonZeroCount === 0) {
        setAllQuantitiesZero(true);
        setSizeSelectorIsDisabled(true);
        // setQuantitySelectorIsDisabled(false);
      }


    }, [productStyleSize]);

    const updateCurrentQuantity = ((e) => {
      setProductStyleQuantity(e.target.value);
      e.preventDefault();
    });

    return (
      <div>
        <select value={productStyleQuantity} onChange={(e) => { updateCurrentQuantity(e); }} disabled={quantitySelectorIsDisabled}>
          {dropdownQuantitiesArray.map((quantity, index) => {
            return <option key={index}>{quantity}</option>;
          })}
        </select>
      </div>
    );
  });

export default QuantitySelector;
