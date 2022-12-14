import React from 'react';
import styled from 'styled-components';
import CurrentImages from './CurrentImages.jsx';
import ImageThumbnails from './ImageThumbnails.jsx';
import ImageArrows from './ImageArrows.jsx';

const DefaultImageViewDiv = styled.div`
  height: 100%;
  position: relative;
`;

const TopLeftDiv = styled.div`
  width: 100%;
  height: 100%
  border: solid;
  display: flex;
  flex-wrap: wrap;
  flex-direction: columns;
  justify-content: center;
  align-items: center;
  position: absolute;

`;
const BottomLeftDiv = styled.div`

`;

const LeftButton = styled.div`
  order: 1;
`;

const RightButton = styled.div`
  order: 3;
`;


const ImageDiv = styled.div`
  order: 2;
`;

const ThumbnailsDiv = styled.div`
  order: 2;
  position: absolute;
  width: 80%;
  height: 10%;
  bottom: 0;
  justify-content: space-around;
  margin-left: 20%;
  margin-bottom: 0%;
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
        <TopLeftDiv>
          <LeftButton style={currentImageIndex === 0 || expandedImageViewActive ? { visibility: 'hidden' } : { visibility: 'visible' }} onClick={handleLeftClick}>
            <img src="https://cdn-icons-png.flaticon.com/64/44/44917.png" alt="" />
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
            <img src="https://cdn-icons-png.flaticon.com/64/45/45044.png" alt="" />
          </RightButton>
        </TopLeftDiv>
        <BottomLeftDiv>
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
        </BottomLeftDiv>
      </DefaultImageViewDiv>

    );
  });

export default DefaultImageView;
