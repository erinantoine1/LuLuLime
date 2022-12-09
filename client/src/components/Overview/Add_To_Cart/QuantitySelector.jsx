import React, { useState, useEffect } from 'react';

const QuantitySelector = (
  ({
    productStyleId, setProductStyleId, productStyleName, setProductStyleName, productStyleOriginalPrice, setProductStyleOriginalPrice, productStyleSalePrice, setProductStyleSalePrice, productStylePhotos, setProductStylePhotos, productStyleSku, setProductStyleSku, productStyleSkus, setProductStyleSkus, productStyleSize, setProductStyleSize, productStyleQuantity, setProductStyleQuantity, productStyleSizes, setProductStyleSizes, productStyleQuantities, setProductStyleQuantities, undefinedSizeSubmitted, setUndefinedSizeSubmitted, quantitySelectorIsDisabled, setQuantitySelectorIsDisabled, dropdownQuantitiesArray, setDropdownQuantitiesArray
  }) => {
    let currentMaxQuantityIndex;

    useEffect(() => {
      if (productStyleSize) {
        setQuantitySelectorIsDisabled(false);
        for (let i = 0; i < productStyleSizes.length; i++) {
          if (productStyleSizes[i] === productStyleSize) {
            if (i <= 15) {
              currentMaxQuantityIndex = i;
            } else if (i > 15) {
              currentMaxQuantityIndex = 15;
            }
          }
        }
        const tempArray = [];
        for (let i = 1; i <= productStyleQuantities[currentMaxQuantityIndex]; i++) {
          tempArray.push(i);
        }
        setDropdownQuantitiesArray(tempArray);
      }
    }, [productStyleSize]);

    const updateCurrentQuantity = ((e) => {
      setProductStyleQuantity(e.target.value);
      e.preventDefault();
    });


    return (
      <div>
        <select value={productStyleQuantity} onChange={(e) => { updateCurrentQuantity(e); }} disabled={quantitySelectorIsDisabled}>
          {dropdownQuantitiesArray.map((quantity) => {
            return <option>{quantity}</option>;
          })}
        </select>
      </div>
    );
  });

export default QuantitySelector;
