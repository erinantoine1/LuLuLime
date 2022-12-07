/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyleThumbnailImg = styled.img`
height: 50px;
width: 50px;
border: solid;
z-index: 50;
position: relative;
`;

const StyleThumbnail = (
  ({
    productStyleId, setProductStyleId, styleId, productStyleName, setProductStyleName, styleName, productStyleOriginalPrice, setProductStyleOriginalPrice, styleOriginalPrice, productStyleSalePrice, setProductStyleSalePrice, styleSalePrice, productStylePhotos, setProductStylePhotos, stylePhotos, productStyleSku, setProductStyleSku, productStyleSkus, setProductStyleSkus, styleSkus, productStyleSize, setProductStyleSize, productStyleQuantity, setProductStyleQuantity, productStyleSizes, setProductStyleSizes, productStyleQuantities, setProductStyleQuantities, quantitySelectorIsDisabled, setQuantitySelectorIsDisabled, dropdownQuantitiesArray, setDropdownQuantitiesArray
  }) => {

    const thumbnailClickHandler = (e) => {
      const skuKeys = Object.keys(styleSkus);

      const styleSizesArray = [];
      const styleQuantitiesArray = [];
      for (let i = 0; i < skuKeys.length; i++) {
        console.log(styleSkus[skuKeys[i]].quantity);
        styleSizesArray.push(styleSkus[skuKeys[i]].size);
        styleQuantitiesArray.push(styleSkus[skuKeys[i]].quantity);
      }

      setProductStyleId(styleId);
      setProductStyleName(styleName);
      setProductStyleOriginalPrice(styleOriginalPrice);
      setProductStyleSalePrice(styleSalePrice);
      setProductStylePhotos(stylePhotos);
      setProductStyleSkus(styleSkus);
      setProductStyleSizes(styleSizesArray);
      setProductStyleSize('Select Size');
      setQuantitySelectorIsDisabled(true);
      // setDropdownQuantitiesArray(['-']);
      setProductStyleQuantities(styleQuantitiesArray);
      e.preventDefault();
    };

    return (
      <StyleThumbnailImg src={stylePhotos[0].thumbnail_url} style={productStyleId === styleId ? { borderColor: 'red' } : { borderColor: 'black' }} alt="select style" onClick={(e) => thumbnailClickHandler(e)} />
    );
  });

StyleThumbnail.propTypes = {
  productStyleId: PropTypes.number,
  setProductStyleId: PropTypes.func,
  styleId: PropTypes.number,
  productStyleName: PropTypes.string,
  setProductStyleName: PropTypes.func,
  styleName: PropTypes.string,
  productStyleOriginalPrice: PropTypes.string,
  setProductStyleOriginalPrice: PropTypes.func,
  styleOriginalPrice: PropTypes.string,
  productStyleSalePrice: PropTypes.string,
  setProductStyleSalePrice: PropTypes.func,
  styleSalePrice: PropTypes.string,
  productStylePhotos: PropTypes.array,
  setProductStylePhotos: PropTypes.func,
  stylePhotos: PropTypes.array,
  productStyleSku: PropTypes.string,
  setProductStyleSku: PropTypes.func,
  productStyleSkus: PropTypes.object,
  setProductStyleSkus: PropTypes.func,
  styleSkus: PropTypes.object,
  productStyleSize: PropTypes.string,
  setProductStyleSize: PropTypes.func,
  productStyleQuantity: PropTypes.number,
  setProductStyleQuantity: PropTypes.func,
  productStyleSizes: PropTypes.array,
  setProductStyleSizes: PropTypes.func,
  productStyleQuantities: PropTypes.array,
  setProductStyleQuantities: PropTypes.func,
  quantitySelectorIsDisabled: PropTypes.bool,
  setQuantitySelectorIsDisabled: PropTypes.func,
  dropdownQuantitiesArray: PropTypes.array,
  setDropdownQuantitiesArray: PropTypes.func,
};

export default StyleThumbnail;
