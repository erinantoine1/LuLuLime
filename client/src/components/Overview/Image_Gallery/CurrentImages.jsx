import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import CurrentImage from './CurrentImage.jsx';

const ContainerParent = styled.div`
  display: flex;
  position: relative;
  height: 661px;
  width: 810px;
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
  top: 0px;
  left: -425px;
`;

const MagnifyingGlassIcon = styled.img`
height: 50px;
width: 50px;
`;

const CurrentImages = (
  ({
    allProductStyles, setAllProductStyles, productStyleDefault, setProductStyleDefault, productStyleId, setProductStyleId, productStyleName, setProductStyleName, productStyleOriginalPrice, setProductStyleOriginalPrice, productStyleSalePrice, setProductStyleSalePrice, productStylePhotos, setProductStylePhotos, productStyleSku, setProductStyleSku, productStyleSkus, setProductStyleSkus, productStyleSize, setProductStyleSize, productStyleQuantity, setProductStyleQuantity, productStyleSizes, setProductStyleSizes, productStyleQuantities, setProductStyleQuantities, undefinedSizeSubmitted, setUndefinedSizeSubmitted, quantitySelectorIsDisabled, setQuantitySelectorIsDisabled, dropdownQuantitiesArray, setDropdownQuantitiesArray, currentThumbnailUrl, setCurrentThumbnailUrl, currentPhotoUrl, setCurrentPhotoUrl, currentImageIndex, setCurrentImageIndex, expandedImageViewActive, setExpandedImageViewActive
  }) => {
    let photoMap = [];
    const containerRef = useRef(null);



    const handlePhotoClick = (e) => {
      setExpandedImageViewActive(true);
      e.preventDefault();
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
              expandedImageViewActive={expandedImageViewActive}
              setExpandedImageViewActive={setExpandedImageViewActive}
            />
          );
        })
      );
    }
    return (
      <ContainerParent style={expandedImageViewActive === true ? { maxHeight: '100%', maxWidth: '100%' } : { maxHeight: '650px', maxWidth: '750px' }}>
        <PhotoContainer ref={containerRef} onClick={(e) => { handlePhotoClick(e); }}>
          {photoMap[currentImageIndex]}
        </PhotoContainer>
      </ContainerParent>
    );
  });

export default CurrentImages;
