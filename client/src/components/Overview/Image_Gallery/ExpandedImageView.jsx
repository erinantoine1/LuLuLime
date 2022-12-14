import React from 'react';
import styled, { keyframes } from 'styled-components';
import ExpandedCurrentImages from './ExpandedCurrentImages.jsx';
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

const expandAnimation = keyframes`
  0% {transform: scale(0)}
  100% {transform: scale(1)}
`;

const collapseAnimation = keyframes`
  0% {transform: scale(1)}
  100% {transform: scale(0)}
`;

export const ModalBackground = styled.div`
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
  animation-fill-mode: forwards;
  -webkit-backface-visibility: hidden;
`;


const ExpandedImageViewContainer = styled.div`
  z-index: 90;
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

`;

const LeftButton = styled.button`
  z-index: 100;
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
  position: absolute;
  top: 500px;
  left: 25%;
  z-index: 150;
`;

const RightButton = styled.button`
  float: right;
  z-index: 100;
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
  left: 70%;
  top: 500px;
  z-index: 150;
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

    const closeModal = (e) => {
      setExpandedImageViewActive(false);
      e.preventDefault();
    };



    return (
      <ExpandedImageViewContainer style={expandedImageViewActive === true ? { visibility: 'visible' } : { visibility: 'hidden' }}>
        <ModalBackground onClick={(e) => closeModal(e)}>
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
        </ModalBackground>
      </ExpandedImageViewContainer>
    );
  });

export default ExpandedImageView;
