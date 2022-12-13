import React, { useRef } from 'react';
import styled from 'styled-components';
import ImageThumbnail from './ImageThumbnail.jsx';


const ContainerParent = styled.div`
display: flex;
position: relative;
width: 78%;
top: -3%;
left: -1%;
`;

const ThumbnailsContainer = styled.div`
display: flex;
overflow: hidden;
text-align: center;
scroll-behavior: smooth;
flex: 1;
height: 50px;
width: 50px;
`;

const ThumbnailContainer = styled.div`
display: flex-wrap;
text-align: center;
object-fit: cover;
height: 50px;
width: 50px;
margin: auto;
`;

const LeftButton = styled.button`
float: left;
text-align: center;
background-color: white;
height: 50px;
width: 50px;
border-radius: 50%;
border: none;
cursor: pointer;
font-size: 3rem;
position: relative;
top: -2%;
left: -1%;
`;

const RightButton = styled.button`
float: right;
text-align: center;
background-color: white;
height: 50px;
width: 50px;
border-radius: 50%;;
border: none;
cursor: pointer;
font-size: 3rem;
top: -2%;
`;

const ImageThumbnails = (
  ({
    allProductStyles, setAllProductStyles, productStyleDefault, setProductStyleDefault, productStyleId, setProductStyleId, productStyleName, setProductStyleName, productStyleOriginalPrice, setProductStyleOriginalPrice, productStyleSalePrice, setProductStyleSalePrice, productStylePhotos, setProductStylePhotos, productStyleSku, setProductStyleSku, productStyleSkus, setProductStyleSkus, productStyleSize, setProductStyleSize, productStyleQuantity, setProductStyleQuantity, productStyleSizes, setProductStyleSizes, productStyleQuantities, setProductStyleQuantities, undefinedSizeSubmitted, setUndefinedSizeSubmitted, quantitySelectorIsDisabled, setQuantitySelectorIsDisabled, dropdownQuantitiesArray, setDropdownQuantitiesArray, currentThumbnailUrl, setCurrentThumbnailUrl, currentPhotoUrl, setCurrentPhotoUrl, currentImageIndex, setCurrentImageIndex
  }) => {

    let thumbnailMap = [];
    const containerRef = useRef(null);

    const handleLeftClick = () => {
      containerRef.current.scrollLeft -= containerRef.current.offsetWidth * (1 / 7);
    };

    const handleRightClick = () => {
      containerRef.current.scrollLeft += containerRef.current.offsetWidth * (1 / 7);
    };

    if (productStylePhotos) {
      thumbnailMap = (
        productStylePhotos.map((photo, index) => {
          return (
            <ThumbnailContainer>
              <ImageThumbnail
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
                key={index}
              />
            </ThumbnailContainer>
          );
        }));
    }

    return (
      <ContainerParent>
        <LeftButton onClick={handleLeftClick}>⇠</LeftButton>
        <ThumbnailsContainer ref={containerRef}>
          {thumbnailMap}
        </ThumbnailsContainer>
        <RightButton onClick={handleRightClick}>⇢</RightButton>
      </ContainerParent>
    );
  });

export default ImageThumbnails;
