import React from 'react';
import styled, { keyframes } from 'styled-components';
import ExpandedCurrentImages from './ExpandedCurrentImages';
import ImageIcons from './ImageIcons.jsx';
import ImageThumbnails from './ImageThumbnails.jsx';
import ImageArrows from './ImageArrows.jsx';

const fadeInAnimation = keyframes`
0% { opacity: 0}
100% { opacity: 1}
`;

const fadeOutAnimation = keyframes`
  0% { opacity: 1}
  100% { opacity: 0}
`;

const ExpandedImageViewContainer = styled.div`
  z-index: 100;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation-name: ${props => props.out ? fadeOutAnimation : fadeInAnimation};
  animation-duration: 0.3s;
`;

const LeftButton = styled.button`
  float: left;
  text-align: center;
  background-color: white;
  height: 75px;
  width: 75px;
  border-radius: 50%;
  margin: auto 6px;
  border: none;
  cursor: pointer;
  font-size: 3rem;
  position: relative;
  top: 500px;
  left: -900px;
  z-index: 100;
`;

const RightButton = styled.button`
  float: right;
  text-align: center;
  background-color: white;
  height: 75px;
  width: 75px;
  border-radius: 50%;
  margin: auto 6px;
  border: none;
  cursor: pointer;
  font-size: 3rem;
  position: absolute;
  left: 1800px;
  top: 400px;
  z-index: 100;
`;

const ExpandedImageView = (
  ({
    allProductStyles, setAllProductStyles, productStyleDefault, setProductStyleDefault, productStyleId, setProductStyleId, productStyleName, setProductStyleName, productStyleOriginalPrice, setProductStyleOriginalPrice, productStyleSalePrice, setProductStyleSalePrice, productStylePhotos, setProductStylePhotos, productStyleSku, setProductStyleSku, productStyleSkus, setProductStyleSkus, productStyleSize, setProductStyleSize, productStyleQuantity, setProductStyleQuantity, productStyleSizes, setProductStyleSizes, productStyleQuantities, setProductStyleQuantities, undefinedSizeSubmitted, setUndefinedSizeSubmitted, quantitySelectorIsDisabled, setQuantitySelectorIsDisabled, dropdownQuantitiesArray, setDropdownQuantitiesArray, currentThumbnailUrl, setCurrentThumbnailUrl, currentPhotoUrl, setCurrentPhotoUrl, currentImageIndex, setCurrentImageIndex, expandedImageViewActive, setExpandedImageViewActive, ImageIsZoomed, setImageIsZoomed
  }) => {

    const handleLeftClick = () => {
      if ((currentImageIndex - 1) >= 0) {
        setCurrentImageIndex(currentImageIndex - 1);
      }
    };

    const handleRightClick = () => {
      if ((currentImageIndex + 1) !== productStylePhotos.length) {
        setCurrentImageIndex(currentImageIndex + 1);
      }
    };

    return (
      <ExpandedImageViewContainer style={expandedImageViewActive === true ? { visibility: 'visible' } : { visibility: 'hidden' }}>
        <LeftButton style={currentImageIndex === 0 || !expandedImageViewActive || ImageIsZoomed ? { visibility: 'hidden' } : { visibility: 'visible' }} onClick={handleLeftClick}>⇠</LeftButton>
        <ExpandedCurrentImages
          allProductStyles={allProductStyles}
          setAllProductStyles={setAllProductStyles}
          productStyleDefault={productStyleDefault}
          setProductStyleDefault={setProductStyleDefault}
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
          currentThumbnailUrl={currentThumbnailUrl}
          setCurrentThumbnailUrl={setCurrentThumbnailUrl}
          currentPhotoUrl={currentPhotoUrl}
          setCurrentPhotoUrl={setCurrentPhotoUrl}
          currentImageIndex={currentImageIndex}
          setCurrentImageIndex={setCurrentImageIndex}
          expandedImageViewActive={expandedImageViewActive}
          setExpandedImageViewActive={setExpandedImageViewActive}
          ImageIsZoomed={ImageIsZoomed}
          setImageIsZoomed={setImageIsZoomed}
        />
        <RightButton style={(currentImageIndex + 1) === productStylePhotos.length - 1 || !expandedImageViewActive || ImageIsZoomed ? { visibility: 'hidden' } : { visibility: 'visible' }} onClick={handleRightClick}>⇢</RightButton>
        <ImageIcons
          style={(ImageIsZoomed === true) ? { visibility: 'hidden' } : { visibility: 'visible' }}
          allProductStyles={allProductStyles}
          setAllProductStyles={setAllProductStyles}
          productStyleDefault={productStyleDefault}
          setProductStyleDefault={setProductStyleDefault}
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
          currentThumbnailUrl={currentThumbnailUrl}
          setCurrentThumbnailUrl={setCurrentThumbnailUrl}
          currentPhotoUrl={currentPhotoUrl}
          setCurrentPhotoUrl={setCurrentPhotoUrl}
          currentImageIndex={currentImageIndex}
          setCurrentImageIndex={setCurrentImageIndex}
          expandedImageViewActive={expandedImageViewActive}
          setExpandedImageViewActive={setExpandedImageViewActive}
          ImageIsZoomed={ImageIsZoomed}
          setImageIsZoomed={setImageIsZoomed}
        />
      </ExpandedImageViewContainer>
    );
  });

export default ExpandedImageView;
