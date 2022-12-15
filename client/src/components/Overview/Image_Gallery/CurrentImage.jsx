import React from 'react';
import styled from 'styled-components';

const CurrentImg = styled.img`
  &:hover {
    cursor: zoom-in;
  }
  max-height: fit-content;
  width: 425px;
  border-radius: 3%;
`;

const CurrentImage = (
  ({
    allProductStyles, setAllProductStyles, productStyleDefault, setProductStyleDefault, productStyleId, setProductStyleId, productStyleName, setProductStyleName, productStyleOriginalPrice, setProductStyleOriginalPrice, productStyleSalePrice, setProductStyleSalePrice, productStylePhotos, setProductStylePhotos, productStyleSku, setProductStyleSku, productStyleSkus, setProductStyleSkus, productStyleSize, setProductStyleSize, productStyleQuantity, setProductStyleQuantity, productStyleSizes, setProductStyleSizes, productStyleQuantities, setProductStyleQuantities, undefinedSizeSubmitted, setUndefinedSizeSubmitted, quantitySelectorIsDisabled, setQuantitySelectorIsDisabled, dropdownQuantitiesArray, setDropdownQuantitiesArray, stylePhotos, photoUrl, thumbnailUrl, currentThumbnailUrl, setCurrentThumbnailUrl, currentPhotoUrl, setCurrentPhotoUrl, currentImageIndex, setCurrentImageIndex, expandedImageViewActive, setExpandedImageViewActive
  }) => {
    return (
      <CurrentImg src={photoUrl} alt='' />
    );
  });

export default CurrentImage;
