/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-plusplus */
import React, { useState, useEffect } from 'react';
import SizeSelector from './SizeSelector.jsx';
import QuantitySelector from './QuantitySelector.jsx';
import AddToCartButton from './AddToCartButton.jsx';

const AddToCart = ({
  productStyleId, setProductStyleId, productStyleName, setProductStyleName, productStyleOriginalPrice, setProductStyleOriginalPrice, productStyleSalePrice, setProductStyleSalePrice, productStylePhotos, setProductStylePhotos, productStyleSku, setProductStyleSku, productStyleSkus, setProductStyleSkus, productStyleSize, setProductStyleSize, productStyleQuantity, setProductStyleQuantity, productStyleSizes, setProductStyleSizes, productStyleQuantities, setProductStyleQuantities, AddToCartSubmit, undefinedSizeSubmitted, setUndefinedSizeSubmitted, quantitySelectorIsDisabled, setQuantitySelectorIsDisabled, dropdownQuantitiesArray, setDropdownQuantitiesArray, addToCartButtonIsVisible, setAddToCartButtonIsVisible, addToCartButtonIsDisabled, setAddToCartButtonIsDisabled, allQuantitiesZero, setAllQuantitiesZero, sizeSelectorIsDisabled, setSizeSelectorIsDisabled, productStyleSizeDropdownLength, setProductStyleSizeDropdownLength
}) => {

  const AddToCartOnSubmit = (e) => {
    if (allQuantitiesZero === false) {
      AddToCartSubmit();
    }
    e.preventDefault();
  };

  let temp;
  useEffect(() => {
    for (let i = 0; i < productStyleSizes.length; i++) {
      if (productStyleQuantities[i] === 0) {
        const tempSizes = productStyleSizes.slice();
        const tempQuantities = productStyleQuantities.slice();
        tempSizes.splice(i, 1);
        tempQuantities.splice(i, 1);
        setProductStyleSizes(tempSizes);
        setProductStyleQuantities(tempQuantities);
        setQuantitySelectorIsDisabled(true);
      }

    }
  }, [productStyleSizes]);

  // useEffect(() => {
  //   if (undefinedSizeSubmitted) {
  //     setProductStyleSizeDropdownLength(productStyleSize.length);
  //   } else {
  //     setProductStyleSizeDropdownLength(1);
  //   }
  // }, [productStyleSizes]);


  return (
    <div>
      <div style={undefinedSizeSubmitted ? { visibility: 'visible' } : { visibility: 'hidden' }}>Please select a size.</div>
      <form onSubmit={(e) => { AddToCartOnSubmit(e); }}>
        <AddToCartButton
          productStyleId={productStyleId}
          setProductStyleId={setProductStyleId}
          productStyleName={productStyleName}
          setProductStyleName={setProductStyleName}
          productStyleOriginalPrice={productStyleOriginalPrice}
          setProductStyleOriginalPrice={setProductStyleOriginalPrice}
          productStyleSalePrice={productStyleSalePrice}
          setProductStyleSalePrice={setProductStyleSalePrice}
          productStylePhotos={productStylePhotos}
          setProductStylePhotos={setProductStylePhotos}
          productStyleSku={productStyleSku}
          setProductStyleSku={setProductStyleSku}
          productStyleSkus={productStyleSkus}
          setProductStyleSkus={setProductStyleSkus}
          productStyleSize={productStyleSize}
          setProductStyleSize={setProductStyleSize}
          productStyleQuantity={productStyleQuantity}
          setProductStyleQuantity={setProductStyleQuantity}
          productStyleSizes={productStyleSizes}
          setProductStyleSizes={setProductStyleSizes}
          productStyleQuantities={productStyleQuantities}
          setProductStyleQuantities={setProductStyleQuantities}
          undefinedSizeSubmitted={undefinedSizeSubmitted}
          setUndefinedSizeSubmitted={setUndefinedSizeSubmitted}
          quantitySelectorIsDisabled={quantitySelectorIsDisabled}
          setQuantitySelectorIsDisabled={setQuantitySelectorIsDisabled}
          dropdownQuantitiesArray={dropdownQuantitiesArray}
          setDropdownQuantitiesArray={setDropdownQuantitiesArray}
          addToCartButtonIsVisible={addToCartButtonIsVisible}
          setAddToCartButtonIsVisible={setAddToCartButtonIsVisible}
          addToCartButtonIsDisabled={addToCartButtonIsDisabled}
          setAddToCartButtonIsDisabled={setAddToCartButtonIsDisabled}
          allQuantitiesZero={allQuantitiesZero}
          setAllQuantitiesZero={setAllQuantitiesZero}
          sizeSelectorIsDisabled={sizeSelectorIsDisabled}
          setSizeSelectorIsDisabled={setSizeSelectorIsDisabled}
          productStyleSizeDropdownLength={productStyleSizeDropdownLength}
          setProductStyleSizeDropdownLength={setProductStyleSizeDropdownLength}
        />
        <div style={{ position: 'relative', top: '-22px', left: '250px' }}>
          <QuantitySelector
            productStyleId={productStyleId}
            setProductStyleId={setProductStyleId}
            productStyleName={productStyleName}
            setProductStyleName={setProductStyleName}
            productStyleOriginalPrice={productStyleOriginalPrice}
            setProductStyleOriginalPrice={setProductStyleOriginalPrice}
            productStyleSalePrice={productStyleSalePrice}
            setProductStyleSalePrice={setProductStyleSalePrice}
            productStylePhotos={productStylePhotos}
            setProductStylePhotos={setProductStylePhotos}
            productStyleSku={productStyleSku}
            setProductStyleSku={setProductStyleSku}
            productStyleSkus={productStyleSkus}
            setProductStyleSkus={setProductStyleSkus}
            productStyleSize={productStyleSize}
            setProductStyleSize={setProductStyleSize}
            productStyleQuantity={productStyleQuantity}
            setProductStyleQuantity={setProductStyleQuantity}
            productStyleSizes={productStyleSizes}
            setProductStyleSizes={setProductStyleSizes}
            productStyleQuantities={productStyleQuantities}
            setProductStyleQuantities={setProductStyleQuantities}
            undefinedSizeSubmitted={undefinedSizeSubmitted}
            setUndefinedSizeSubmitted={setUndefinedSizeSubmitted}
            quantitySelectorIsDisabled={quantitySelectorIsDisabled}
            setQuantitySelectorIsDisabled={setQuantitySelectorIsDisabled}
            dropdownQuantitiesArray={dropdownQuantitiesArray}
            setDropdownQuantitiesArray={setDropdownQuantitiesArray}
            addToCartButtonIsVisible={addToCartButtonIsVisible}
            setAddToCartButtonIsVisible={setAddToCartButtonIsVisible}
            addToCartButtonIsDisabled={addToCartButtonIsDisabled}
            setAddToCartButtonIsDisabled={setAddToCartButtonIsDisabled}
            allQuantitiesZero={allQuantitiesZero}
            setAllQuantitiesZero={setAllQuantitiesZero}
            sizeSelectorIsDisabled={sizeSelectorIsDisabled}
            setSizeSelectorIsDisabled={setSizeSelectorIsDisabled}
            productStyleSizeDropdownLength={productStyleSizeDropdownLength}
            setProductStyleSizeDropdownLength={setProductStyleSizeDropdownLength}
          />
        </div>
        <div style={{ position: 'absolute', top: '45px', left: '125px' }}>
          <SizeSelector
            productStyleId={productStyleId}
            setProductStyleId={setProductStyleId}
            productStyleName={productStyleName}
            setProductStyleName={setProductStyleName}
            productStyleOriginalPrice={productStyleOriginalPrice}
            setProductStyleOriginalPrice={setProductStyleOriginalPrice}
            productStyleSalePrice={productStyleSalePrice}
            setProductStyleSalePrice={setProductStyleSalePrice}
            productStylePhotos={productStylePhotos}
            setProductStylePhotos={setProductStylePhotos}
            productStyleSku={productStyleSku}
            setProductStyleSku={setProductStyleSku}
            productStyleSkus={productStyleSkus}
            setProductStyleSkus={setProductStyleSkus}
            productStyleSize={productStyleSize}
            setProductStyleSize={setProductStyleSize}
            productStyleQuantity={productStyleQuantity}
            setProductStyleQuantity={setProductStyleQuantity}
            productStyleSizes={productStyleSizes}
            setProductStyleSizes={setProductStyleSizes}
            productStyleQuantities={productStyleQuantities}
            setProductStyleQuantities={setProductStyleQuantities}
            undefinedSizeSubmitted={undefinedSizeSubmitted}
            setUndefinedSizeSubmitted={setUndefinedSizeSubmitted}
            quantitySelectorIsDisabled={quantitySelectorIsDisabled}
            setQuantitySelectorIsDisabled={setQuantitySelectorIsDisabled}
            dropdownQuantitiesArray={dropdownQuantitiesArray}
            setDropdownQuantitiesArray={setDropdownQuantitiesArray}
            sizeSelectorIsDisabled={sizeSelectorIsDisabled}
            setSizeSelectorIsDisabled={setSizeSelectorIsDisabled}
            productStyleSizeDropdownLength={productStyleSizeDropdownLength}
            setProductStyleSizeDropdownLength={setProductStyleSizeDropdownLength}
          />
        </div>
      </form>
    </div>
  );
};

export default AddToCart;
