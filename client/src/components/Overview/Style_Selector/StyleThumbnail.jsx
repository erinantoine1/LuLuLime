/* eslint-disable no-plusplus */
import React from 'react';
import styled from 'styled-components';

const StyleThumbnailImg = styled.img`
height: 50px;
width: 50px;
margin: -10px;
float: right;
position: relative;
top: 30px;
left: -50px;
right: 50px;
`;

const StyleThumbnailOverlayImg = styled.img`
height: 80px;
width: 80px;
position: relative;
top: 5px;
left: 5px;
`;

const StyleThumbnail = (
  ({
    productStyleDefault, setProductStyleDefault, styleDefault, productStyleId, setProductStyleId, styleId, productStyleName, setProductStyleName, styleName, productStyleOriginalPrice, setProductStyleOriginalPrice, styleOriginalPrice, productStyleSalePrice, setProductStyleSalePrice, styleSalePrice, productStylePhotos, setProductStylePhotos, stylePhotos, productStyleSku, setProductStyleSku, productStyleSkus, setProductStyleSkus, styleSkus, productStyleSize, setProductStyleSize, productStyleQuantity, setProductStyleQuantity, productStyleSizes, setProductStyleSizes, productStyleQuantities, setProductStyleQuantities, quantitySelectorIsDisabled, setQuantitySelectorIsDisabled, dropdownQuantitiesArray, setDropdownQuantitiesArray
  }) => {
    console.log(productStyleDefault);
    const thumbnailClickHandler = (e) => {
      const skuKeys = Object.keys(styleSkus);

      const styleSizesArray = [];
      const styleQuantitiesArray = [];
      for (let i = 0; i < skuKeys.length; i++) {
        styleSizesArray.push(styleSkus[skuKeys[i]].size);
        styleQuantitiesArray.push(styleSkus[skuKeys[i]].quantity);
      }

      setProductStyleDefault(styleDefault);
      setProductStyleId(styleId);
      setProductStyleName(styleName);
      setProductStyleOriginalPrice(styleOriginalPrice);
      setProductStyleSalePrice(styleSalePrice);
      setProductStylePhotos(stylePhotos);
      setProductStyleSkus(styleSkus);
      setProductStyleSizes(styleSizesArray);
      setProductStyleSize('Select Size');
      setQuantitySelectorIsDisabled(true);
      setProductStyleQuantities(styleQuantitiesArray);
      e.preventDefault();
    };

    return (
      <div>
        <StyleThumbnailImg src={stylePhotos[0].thumbnail_url} alt="select style" onClick={(e) => thumbnailClickHandler(e)} />
        <StyleThumbnailOverlayImg src="https://cdn-icons-png.flaticon.com/512/8968/8968525.png" alt="" style={productStyleId === styleId ? { visibility: 'visible' } : { visibility: 'hidden' }} />
      </div>

    );
  });

export default StyleThumbnail;
