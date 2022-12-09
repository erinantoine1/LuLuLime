import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import CurrentImage from './CurrentImage.jsx';

const ContainerParent = styled.div`
  display: flex;
  position: relative;
  height: 650px;
  width: 750x;
  margin-left: auto;
  margin-right: auto;
`;

const PhotoContainer = styled.div`
  display: flex;
  text-align: center;
  flex: 1;
  object-fit: contain;
  position: relative;
  display: block;
  margin: auto;
  top: -50px;
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
  position: absolute;
  top: 250px;
  z-index: 50;
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
  left: 765px;
  top: 250px;
`;

const MagnifyingGlassIcon = styled.img`
height: 50px;
width: 50px;
`;

const CurrentImages = (
  ({
    allProductStyles, setAllProductStyles, productStyleDefault, setProductStyleDefault, productStyleId, setProductStyleId, productStyleName, setProductStyleName, productStyleOriginalPrice, setProductStyleOriginalPrice, productStyleSalePrice, setProductStyleSalePrice, productStylePhotos, setProductStylePhotos, productStyleSku, setProductStyleSku, productStyleSkus, setProductStyleSkus, productStyleSize, setProductStyleSize, productStyleQuantity, setProductStyleQuantity, productStyleSizes, setProductStyleSizes, productStyleQuantities, setProductStyleQuantities, undefinedSizeSubmitted, setUndefinedSizeSubmitted, quantitySelectorIsDisabled, setQuantitySelectorIsDisabled, dropdownQuantitiesArray, setDropdownQuantitiesArray, currentThumbnailUrl, setCurrentThumbnailUrl, currentPhotoUrl, setCurrentPhotoUrl, currentImageIndex, setCurrentImageIndex
  }) => {
    let photoMap = [];
    const containerRef = useRef(null);

    const handleLeftClick = () => {
      if ((currentImageIndex - 1) >= 0) {
        setCurrentImageIndex(currentImageIndex - 1);
      }
    };

    const handleRightClick = () => {
      if ((currentImageIndex + 1) !== photoMap.length) {
        setCurrentImageIndex(currentImageIndex + 1);
      }
    };

    if (productStylePhotos) {
      photoMap = (
        productStylePhotos.map((photo) => {
          return (
            <CurrentImage
              photoUrl={photo.url}
              thumbnailUrl={photo.thumbnail_url}
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
            />
          );
        })
      );
    }
    return (
      <ContainerParent>
        <LeftButton style={currentImageIndex === 0 ? { visibility: 'hidden' } : { visibility: 'visible' }} onClick={handleLeftClick}>⇠</LeftButton>
        <PhotoContainer ref={containerRef}>
          {photoMap[currentImageIndex]}
        </PhotoContainer>
        <RightButton style={(currentImageIndex + 1) === photoMap.length ? { visibility: 'hidden' } : { visibility: 'visible' }} onClick={handleRightClick}>⇢</RightButton>
      </ContainerParent>
    );
  });

export default CurrentImages;
