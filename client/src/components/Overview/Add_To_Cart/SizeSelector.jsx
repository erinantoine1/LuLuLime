/* eslint-disable max-len */
/* eslint-disable spaced-comment */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable function-paren-newline */
/* eslint-disable react/require-default-props */
/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line spaced-comment
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

SizeSelector.propTypes = {
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

export default SizeSelector;
