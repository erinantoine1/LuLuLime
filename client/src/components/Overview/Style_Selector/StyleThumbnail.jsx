/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyleThumbnailImg = styled.img`
height: 50px;
width: 50px;
border: solid;
z-index: 50;
position: relative;
`;

const StyleThumbnail = ({ thumbnailUrl, currentProductStyle, setCurrentProductStyle, styleId, setCurrentSalePrice, setCurrentOriginalPrice, currentSalePrice, styleOriginalPrice, styleSalePrice, setCurrentSizes, styleSizes, styleQuantities, setCurrentQuantities }) => {

  const thumbnailClickHandler = (e) => {
    setCurrentProductStyle(styleId);
    setCurrentOriginalPrice(styleOriginalPrice);
    setCurrentSalePrice(styleSalePrice);
    setCurrentSizes(styleSizes);
    e.preventDefault();
  };

  return (
    <StyleThumbnailImg src={thumbnailUrl} style={currentProductStyle === styleId ? { borderColor: 'red' } : { borderColor: 'black' }} alt="select style" onClick={(e) => thumbnailClickHandler(e)} />
  );
};

StyleThumbnail.propTypes = {
  thumbnailUrl: PropTypes.string,
  currentProductStyle: PropTypes.number,
  setCurrentProductStyle: PropTypes.func,
  styleId: PropTypes.number,
  setCurrentOriginalPrice: PropTypes.func,
  setCurrentSalePrice: PropTypes.func,
  currentSalePrice: PropTypes.string,
  styleSalePrice: PropTypes.string,
  styleOriginalPrice: PropTypes.string,
  setCurrentSizes: PropTypes.func,
  styleSizes: PropTypes.array,
  styleQuantities: PropTypes.array,
  setCurrentQuantities: PropTypes.func,
};

export default StyleThumbnail;
