/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ImageThumbnailImg = styled.img`
height: 100px;
width: 100px;
border: solid;
z-index: 50;
position: relative;
`;

const ImageThumbnail = (
  ({
    allProductStyles, setAllProductStyles, productStyleDefault, setProductStyleDefault, productStyleId, setProductStyleId, productStyleName, setProductStyleName, productStyleOriginalPrice, setProductStyleOriginalPrice, productStyleSalePrice, setProductStyleSalePrice, productStylePhotos, setProductStylePhotos, productStyleSku, setProductStyleSku, productStyleSkus, setProductStyleSkus, productStyleSize, setProductStyleSize, productStyleQuantity, setProductStyleQuantity, productStyleSizes, setProductStyleSizes, productStyleQuantities, setProductStyleQuantities, undefinedSizeSubmitted, setUndefinedSizeSubmitted, quantitySelectorIsDisabled, setQuantitySelectorIsDisabled, dropdownQuantitiesArray, setDropdownQuantitiesArray, thumbnailUrl, photoUrl, currentThumbnailUrl, setCurrentThumbnailUrl, currentPhotoUrl, setCurrentPhotoUrl, currentImageIndex, setCurrentImageIndex, photoIndex
  }) => {

    const handleThumbnailClick = (e) => {
      setCurrentThumbnailUrl(thumbnailUrl);
      setCurrentPhotoUrl(photoUrl);
      setCurrentImageIndex(photoIndex);
      e.preventDefault();
    };

    return (
      <ImageThumbnailImg src={thumbnailUrl} alt="select style" style={currentImageIndex === photoIndex ? { borderColor: 'red' } : { borderColor: 'black' }} onClick={(e) => { handleThumbnailClick(e); }} />
    );
  });

ImageThumbnail.propTypes = {
  allProductStyles: PropTypes.array,
  setAllProductStyles: PropTypes.func,
  productStyleDefault: PropTypes.bool,
  setProductStyleDefault: PropTypes.func,
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
  thumbnailUrl: PropTypes.string,
  currentThumbnailUrl: PropTypes.string,
  setCurrentThumbnailUrl: PropTypes.func,
  currentPhotoUrl: PropTypes.string,
  setCurrentPhotoUrl: PropTypes.func,
  photoUrl: PropTypes.string,
  currentImageIndex: PropTypes.number,
  setCurrentImageIndex: PropTypes.string,
  photoIndex: PropTypes.number,
};

export default ImageThumbnail;
