import React from 'react';
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
      setProductStyleQuantities(styleQuantitiesArray);
      e.preventDefault();
    };

    return (
      <StyleThumbnailImg src={stylePhotos[0].thumbnail_url} style={productStyleId === styleId ? { borderColor: 'red' } : { borderColor: 'black' }} alt="select style" onClick={(e) => thumbnailClickHandler(e)} />
    );
  });

export default StyleThumbnail;
