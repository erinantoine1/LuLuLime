/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable max-len */
import React, { useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ImageIcon from './ImageIcon.jsx';


const ContainerParent = styled.div`
margin-left: 12%;
margin-right: 12%;
display: flex;
position: relative;
top: -101px;
left: -104px;
border: solid;
width: 850px;
background-color: white;
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
overflow: hidden;
text-align: center;
object-fit: cover;
position: relative;
height: 100px;
width: 100px;
margin: auto;
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
margin: auto;
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
        <LeftButton onClick={handleLeftClick}>⇠</LeftButton>
        <IconsContainer ref={containerRef}>
          {iconMap}
        </IconsContainer>
        <RightButton onClick={handleRightClick}>⇢</RightButton>
      </ContainerParent>
    );
  });



ImageIcons.propTypes = {
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
  currentThumbnailUrl: PropTypes.string,
  setCurrentThumbnailUrl: PropTypes.func,
  currentPhotoUrl: PropTypes.string,
  setCurrentPhotoUrl: PropTypes.func,
  currentImageIndex: PropTypes.number,
  setCurrentImageIndex: PropTypes.string,
};

export default ImageIcons;
