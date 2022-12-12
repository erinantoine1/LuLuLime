/* eslint-disable no-restricted-globals */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable no-cond-assign */
/* eslint-disable no-shadow */
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const CurrentImg = styled.img`
height: 100%;
position: absolute;
overflow: hidden;
`;

const ExpandedCurrentImage = (
  ({
    allProductStyles, setAllProductStyles, productStyleDefault, setProductStyleDefault, productStyleId, setProductStyleId, productStyleName, setProductStyleName, productStyleOriginalPrice, setProductStyleOriginalPrice, productStyleSalePrice, setProductStyleSalePrice, productStylePhotos, setProductStylePhotos, productStyleSku, setProductStyleSku, productStyleSkus, setProductStyleSkus, productStyleSize, setProductStyleSize, productStyleQuantity, setProductStyleQuantity, productStyleSizes, setProductStyleSizes, productStyleQuantities, setProductStyleQuantities, undefinedSizeSubmitted, setUndefinedSizeSubmitted, quantitySelectorIsDisabled, setQuantitySelectorIsDisabled, dropdownQuantitiesArray, setDropdownQuantitiesArray, stylePhotos, photoUrl, thumbnailUrl, currentThumbnailUrl, setCurrentThumbnailUrl, currentPhotoUrl, setCurrentPhotoUrl, currentImageIndex, setCurrentImageIndex, expandedImageViewActive, setExpandedImageViewActive, ImageIsZoomed, setImageIsZoomed
  }) => {

    const [photoDivTop, setPhotoDivTop] = useState(0);
    const [photoDivLeft, setPhotoDivLeft] = useState(0);
    const [pointerX, setPointerX] = useState(0);
    const [pointerY, setPointerY] = useState(0);
    const [prevPointerX, setPrevPointerX] = useState(0);
    const [prevPointerY, setPrevPointerY] = useState(0);
    const [xDiff, setXDiff] = useState(0);
    const [yDiff, setYDiff] = useState(0);
    const [zoomedXDiff, setZoomedXDiff] = useState(0);
    const [zoomedYDiff, setZoomedYDiff] = useState(0);
    const [zoomedPhotoDivTop, setZoomedPhotoDivTop] = useState(0);
    const [zoomedPhotoDivLeft, setZoomedPhotoDivLeft] = useState(0);
    const [translateZoomedImageX, setTranslateZoomedImageX] = useState(0);
    const [translateZoomedImageY, setTranslateZoomedImageY] = useState(0);

    const expandedCurrentImageZoom = (e) => {
      setImageIsZoomed(!ImageIsZoomed);
      const rect = e.target.getBoundingClientRect();
      const getDifference = (rect) => {
        setXDiff(e.clientX - rect.left);
        setYDiff(e.clientY - rect.top);
      };
      setPhotoDivLeft(rect.left);
      setPhotoDivTop(rect.top);
      setPointerX(e.clientX);
      setPointerY(e.clientY);
      if (!ImageIsZoomed) {
        getDifference(rect);
      }
      e.preventDefault();
    };

    const getCursor = (e) => {
      if (ImageIsZoomed) {
        const zoomedRect = e.target.getBoundingClientRect();
        setPhotoDivLeft(zoomedRect.left);
        setPhotoDivTop(zoomedRect.top);
        setPrevPointerX(pointerX);
        setPrevPointerY(pointerY);
        setPointerX(e.clientX);
        setPointerY(e.clientY);

        const getDiff = () => {
          setZoomedXDiff(pointerX - prevPointerX);
          setZoomedYDiff(pointerY - prevPointerY);
        };
        getDiff();
        setTranslateZoomedImageX(-zoomedXDiff / 2.5);
        setTranslateZoomedImageY(-zoomedYDiff / 2.5);
      }
      e.preventDefault();
    };


    return (
    // <Translate>
      <CurrentImg src={photoUrl} alt='' onClick={expandedCurrentImageZoom} onMouseMove={getCursor} style={ImageIsZoomed ? { transform: `scale(2.5) translateX(${translateZoomedImageX}px) translateY(${translateZoomedImageY}px)`, cursor: 'zoom-out', transformOrigin: `${xDiff}px ${yDiff}px` } : { transform: 'scale(1)', cursor: 'zoom-in' }} />
    // </Translate>
    );
  });

export default ExpandedCurrentImage;


