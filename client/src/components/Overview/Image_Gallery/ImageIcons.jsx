import React, { useRef } from 'react';
import styled from 'styled-components';
import ImageIcon from './ImageIcon.jsx';


const ContainerParent = styled.div`
margin-left: 12%;
margin-right: 12%;
display: flex;
position: relative;
top: -101px;
left: -104px;
width: 850px;
`;

const IconsContainer = styled.div`
display: flex;
overflow: hidden;
text-align: center;
scroll-behavior: smooth;
flex: 1;
object-fit: cover;
position: relative;
height: 100px;
width: 75px;
`;

const IconContainer = styled.div`
display: flex;
position: relative;
height: 40px;
width: 40px;
margin: auto;
`;

const ImageIcons = (
  ({
    allProductStyles, setAllProductStyles, productStyleDefault, setProductStyleDefault, productStyleId, setProductStyleId, productStyleName, setProductStyleName, productStyleOriginalPrice, setProductStyleOriginalPrice, productStyleSalePrice, setProductStyleSalePrice, productStylePhotos, setProductStylePhotos, productStyleSku, setProductStyleSku, productStyleSkus, setProductStyleSkus, productStyleSize, setProductStyleSize, productStyleQuantity, setProductStyleQuantity, productStyleSizes, setProductStyleSizes, productStyleQuantities, setProductStyleQuantities, undefinedSizeSubmitted, setUndefinedSizeSubmitted, quantitySelectorIsDisabled, setQuantitySelectorIsDisabled, dropdownQuantitiesArray, setDropdownQuantitiesArray, currentThumbnailUrl, setCurrentThumbnailUrl, currentPhotoUrl, setCurrentPhotoUrl, currentImageIndex, setCurrentImageIndex
  }) => {

    let iconMap = [];
    const containerRef = useRef(null);

    const handleLeftClick = () => {
      containerRef.current.scrollLeft -= containerRef.current.offsetWidth * 0.7;
    };

    const handleRightClick = () => {
      containerRef.current.scrollLeft += containerRef.current.offsetWidth * 0.7;
    };

    if (productStylePhotos) {
      iconMap = (
        productStylePhotos.map((photo) => {
          return (
            <IconContainer>
              <ImageIcon
                photoIndex={productStylePhotos.indexOf(photo)}
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
            </IconContainer>
          );
        }));
    }

    return (
      <ContainerParent>
        <IconsContainer ref={containerRef}>
          {iconMap}
        </IconsContainer>
      </ContainerParent>
    );
  });

export default ImageIcons;
