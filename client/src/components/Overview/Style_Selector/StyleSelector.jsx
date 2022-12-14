/* eslint-disable no-plusplus */
/* eslint-disable import/no-named-as-default-member */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import StyleThumbnail from './StyleThumbnail.jsx';

const StyleThumbnailsDiv = styled.div`
width: 400px;
min-height: fit-content;
display: flex;
flex-wrap: wrap;
z-index: 40;
position: relative;
margin-top: 3%;
left: -12%;
`;
const ThumbnailStyleName = styled.div`
height: 30px;
width: 400px;
position: relative;
left: 0%;
top: 0%;
`;

const StyleSelector = (
  ({
    allProductStyles, setAllProductStyles, productStyleDefault, setProductStyleDefault, productStyleId, setProductStyleId, productStyleName, setProductStyleName, productStyleOriginalPrice, setProductStyleOriginalPrice, productStyleSalePrice, setProductStyleSalePrice, productStylePhotos, setProductStylePhotos, productStyleSku, setProductStyleSku, productStyleSkus, setProductStyleSkus, productStyleSize, setProductStyleSize, productStyleQuantity, setProductStyleQuantity, productStyleSizes, setProductStyleSizes, productStyleQuantities, setProductStyleQuantities, undefinedSizeSubmitted, setUndefinedSizeSubmitted, quantitySelectorIsDisabled, setQuantitySelectorIsDisabled, dropdownQuantitiesArray, setDropdownQuantitiesArray
  }) => {
    const thumbnails = allProductStyles.map((styles, index) => {
      return (
        <StyleThumbnail
          productStyleDefault={productStyleDefault}
          setProductStyleDefault={setProductStyleDefault}
          styleDefault={styles['default?']}
          productStyleId={productStyleId}
          setProductStyleId={setProductStyleId}
          styleId={styles.style_id}
          productStyleName={productStyleName}
          setProductStyleName={setProductStyleName}
          styleName={styles.name}
          productStyleOriginalPrice={productStyleOriginalPrice}
          setProductStyleOriginalPrice={setProductStyleOriginalPrice}
          styleOriginalPrice={styles.original_price}
          productStyleSalePrice={productStyleSalePrice}
          setProductStyleSalePrice={setProductStyleSalePrice}
          styleSalePrice={styles.sale_price}
          productStylePhotos={productStylePhotos}
          setProductStylePhotos={setProductStylePhotos}
          stylePhotos={styles.photos}
          productStyleSkus={productStyleSkus}
          setProductStyleSkus={setProductStyleSkus}
          styleSkus={styles.skus}
          productStyleSize={productStyleSize}
          setProductStyleSize={setProductStyleSize}
          productStyleQuantity={productStyleQuantity}
          setProductStyleQuantity={setProductStyleQuantity}
          productStyleSizes={productStyleSizes}
          setProductStyleSizes={setProductStyleSizes}
          productStyleQuantities={productStyleQuantities}
          setProductStyleQuantities={setProductStyleQuantities}
          productStyleSku={productStyleSku}
          setProductStyleSku={setProductStyleSku}
          quantitySelectorIsDisabled={quantitySelectorIsDisabled}
          setQuantitySelectorIsDisabled={setQuantitySelectorIsDisabled}
          dropdownQuantitiesArray={dropdownQuantitiesArray}
          setDropdownQuantitiesArray={setDropdownQuantitiesArray}
          key={index}
        />
      );
    });

    return (
      <div>
        <ThumbnailStyleName>
          <b>Style: </b>
          {`${productStyleName}`}
        </ThumbnailStyleName>
        <StyleThumbnailsDiv>
          {thumbnails}
        </StyleThumbnailsDiv>
      </div>
    );
  });

export default StyleSelector;
