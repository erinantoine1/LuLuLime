/* eslint-disable no-empty-pattern */
/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
/* eslint-disable no-plusplus */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line spaced-comment
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

QuantitySelector.propTypes = {
  productStyleId: PropTypes.number,
  setProductStyleId: PropTypes.func,
  productStyleName: PropTypes.string,
  setProductStyleName: PropTypes.func,
  productStyleOriginalPrice: PropTypes.string,
  setProductStyleOriginalPrice: PropTypes.func,
  productStyleSalePrice: PropTypes.string,
  setProductStyleSalePrice: PropTypes.func,
  productStylePhotos: PropTypes.array,
  setProductStylePhotos: PropTypes.func,
  productStyleSku: PropTypes.string,
  setProductStyleSku: PropTypes.func,
  productStyleSkus: PropTypes.object,
  setProductStyleSkus: PropTypes.func,
  productStyleSize: PropTypes.string,
  setProductStyleSize: PropTypes.func,
  productStyleQuantity: PropTypes.number,
  setProductStyleQuantity: PropTypes.func,
  productStyleSizes: PropTypes.array,
  setProductStyleSizes: PropTypes.func,
  productStyleQuantities: PropTypes.array,
  setProductStyleQuantities: PropTypes.func,
  undefinedSizeSubmitted: PropTypes.bool,
  setUndefinedSizeSubmitted: PropTypes.func,
  quantitySelectorIsDisabled: PropTypes.bool,
  setQuantitySelectorIsDisabled: PropTypes.func,
  dropdownQuantitiesArray: PropTypes.array,
  setDropdownQuantitiesArray: PropTypes.func,
};

export default QuantitySelector;
