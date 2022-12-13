import React from 'react';
import styled from 'styled-components';
import CurrentImages from './CurrentImages.jsx';
import ImageThumbnails from './ImageThumbnails.jsx';
import ImageArrows from './ImageArrows.jsx';

// const LeftButton = styled.button`
//   float: left;
//   text-align: center;
//   height: 75px;
//   width: 75px;
//   border-radius: 50%;
//   border: none;
//   cursor: pointer;
//   font-size: 3rem;
//   z-index: 50;
//   flex: 1;
// `;

// const RightButton = styled.button`
//   float: right;
//   text-align: center;
//   height: 75px;
//   width: 75px;
//   border-radius: 50%;
//   border: none;
//   cursor: pointer;
//   font-size: 3rem;
//   z-index: 50;
//   flex: 3;
// `;

const LeftButton = styled.div`
  order: 1;
`;

const RightButton = styled.div`
  order: 3;
`;


const ImageDiv = styled.div`
  order: 2;
  margin-top: 2%;
`;

const ThumbnailsDiv = styled.div`
  width: 100%;
  order: 4;
  position: relative;
  left: 11.5%;
  bottom: -15%;
  margin-top: -10%;
`;

const DefaultImageViewDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: 0%;
  left: 15%;
  justify-content: center;
  align-content: center;
  margins: auto;
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
      <DefaultImageViewDiv>
        <LeftButton style={currentImageIndex === 0 || expandedImageViewActive ? { visibility: 'hidden' } : { visibility: 'visible' }} onClick={handleLeftClick}>
          <img src="https://cdn-icons-png.flaticon.com/64/44/44917.png" alt="" style={{ position: 'absolute', top: '40%', left: '1.5%' }} />
        </LeftButton>
        <ImageDiv>
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
        </ImageDiv>
        <RightButton style={(currentImageIndex + 1) === productStylePhotos.length - 1 || expandedImageViewActive ? { visibility: 'hidden' } : { visibility: 'visible' }} onClick={handleRightClick}>
          <img src="https://cdn-icons-png.flaticon.com/64/45/45044.png" alt="" style={{ position: 'absolute', top: '40%' }} />
        </RightButton>
        <ThumbnailsDiv>
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
        </ThumbnailsDiv>
      </DefaultImageViewDiv>

    );
  });

export default DefaultImageView;
