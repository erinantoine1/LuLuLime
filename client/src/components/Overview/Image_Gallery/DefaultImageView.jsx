import React from 'react';
import styled from 'styled-components';
import CurrentImages from './CurrentImages.jsx';
import ImageThumbnails from './ImageThumbnails.jsx';
import ImageArrows from './ImageArrows.jsx';

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
  position: absolute;
  top: 250px;
  z-index: 50;
  left: 100px;
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
  left: 800px;
  top: 250px;
`;

const DefaultImageView = (
  ({
    allProductStyles, setAllProductStyles, productStyleDefault, setProductStyleDefault, productStyleId, setProductStyleId, productStyleName, setProductStyleName, productStyleOriginalPrice, setProductStyleOriginalPrice, productStyleSalePrice, setProductStyleSalePrice, productStylePhotos, setProductStylePhotos, productStyleSku, setProductStyleSku, productStyleSkus, setProductStyleSkus, productStyleSize, setProductStyleSize, productStyleQuantity, setProductStyleQuantity, productStyleSizes, setProductStyleSizes, productStyleQuantities, setProductStyleQuantities, undefinedSizeSubmitted, setUndefinedSizeSubmitted, quantitySelectorIsDisabled, setQuantitySelectorIsDisabled, dropdownQuantitiesArray, setDropdownQuantitiesArray, currentThumbnailUrl, setCurrentThumbnailUrl, currentPhotoUrl, setCurrentPhotoUrl, currentImageIndex, setCurrentImageIndex, expandedImageViewActive, setExpandedImageViewActive
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
      <div>
        <LeftButton style={currentImageIndex === 0 || expandedImageViewActive ? { visibility: 'hidden' } : { visibility: 'visible' }} onClick={handleLeftClick}>⇠</LeftButton>
        <CurrentImages
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
        />
        <RightButton style={(currentImageIndex + 1) === productStylePhotos.length - 1 || expandedImageViewActive ? { visibility: 'hidden' } : { visibility: 'visible' }} onClick={handleRightClick}>⇢</RightButton>
        <ImageThumbnails
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
        />
      </div>
    );
  });

export default DefaultImageView;
