/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import styled from 'styled-components';

const ImageIconImg = styled.img`
border: solid;
`;

const ImageIcon = (
  ({
    allProductStyles, setAllProductStyles, productStyleDefault, setProductStyleDefault, productStyleId, setProductStyleId, productStyleName, setProductStyleName, productStyleOriginalPrice, setProductStyleOriginalPrice, productStyleSalePrice, setProductStyleSalePrice, productStylePhotos, setProductStylePhotos, productStyleSku, setProductStyleSku, productStyleSkus, setProductStyleSkus, productStyleSize, setProductStyleSize, productStyleQuantity, setProductStyleQuantity, productStyleSizes, setProductStyleSizes, productStyleQuantities, setProductStyleQuantities, undefinedSizeSubmitted, setUndefinedSizeSubmitted, quantitySelectorIsDisabled, setQuantitySelectorIsDisabled, dropdownQuantitiesArray, setDropdownQuantitiesArray, thumbnailUrl, photoUrl, currentThumbnailUrl, setCurrentThumbnailUrl, currentPhotoUrl, setCurrentPhotoUrl, currentImageIndex, setCurrentImageIndex, photoIndex
  }) => {

    const handleIconClick = (e) => {
      setCurrentThumbnailUrl(thumbnailUrl);
      setCurrentPhotoUrl(photoUrl);
      setCurrentImageIndex(photoIndex);
      e.preventDefault();
    };

    return (
      <ImageIconImg src="https://cdn-icons-png.flaticon.com/512/6315/6315372.png" alt="" style={currentImageIndex === photoIndex ? { borderColor: 'red' } : { borderColor: 'black' }} onClick={(e) => { handleIconClick(e); }} />
    );
  });

export default ImageIcon;
