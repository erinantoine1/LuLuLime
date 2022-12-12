import React from 'react';

const AddToCartButton = (
  ({
    productStyleId, setProductStyleId, productStyleName, setProductStyleName, productStyleOriginalPrice, setProductStyleOriginalPrice, productStyleSalePrice, setProductStyleSalePrice, productStylePhotos, setProductStylePhotos, productStyleSku, setProductStyleSku, productStyleSkus, setProductStyleSkus, productStyleSize, setProductStyleSize, productStyleQuantity, setProductStyleQuantity, productStyleSizes, setProductStyleSizes, productStyleQuantities, setProductStyleQuantities, undefinedSizeSubmitted, setUndefinedSizeSubmitted, quantitySelectorIsDisabled, setQuantitySelectorIsDisabled, dropdownQuantitiesArray, setDropdownQuantitiesArray, addToCartButtonIsVisible, setAddToCartButtonIsVisible, addToCartButtonIsDisabled, setAddToCartButtonIsDisabled, allQuantitiesZero, setAllQuantitiesZero, productStyleSizeDropdownLength, setProductStyleSizeDropdownLength
  }) => {

    // console.log(addToCartButtonIsVisible);
    return (
      <button type="submit" style={!allQuantitiesZero ? { visibility: 'visible', height: '50px', width: '100px', backgroundColor: 'limeGreen', color: 'white' } : { visibility: 'hidden' }}>Add to Cart</button>
    );
  });

export default AddToCartButton;
