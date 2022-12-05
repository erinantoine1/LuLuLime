/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StyleThumbnail from './StyleThumbnail.jsx';

const StyleThumbnailsDiv = styled.div`
height: 190px;
border: solid;
`;
const StyleThumbnail1 = styled.div`
position: relative;
left: 25px;
top: 25px;
`;
const StyleThumbnail2 = styled.div`
position: relative;
left: 105px;
top: -28px;
`;
const StyleThumbnail3 = styled.div`
position: relative;
left: 180px;
top: -81px;
`;
const StyleThumbnail4 = styled.div`
position: relative;
left: 255px;
top: -133px;
`;
const StyleThumbnail5 = styled.div`
position: relative;
left: 25px;
top: -105px;
`;
const StyleThumbnail6 = styled.div`
position: relative;
left: 105px;
top: -158px;
`;
const StyleThumbnail7 = styled.div`
position: relative;
left: 180px;
top: -210px;
`;
const StyleThumbnail8 = styled.div`
position: relative;
left: 255px;
top: -263px;
`;

const StyleSelector = ({ allProductStyles, currentProductStyle, setCurrentProductStyle, setCurrentOriginalPrice, setCurrentSalePrice, currentSalePrice, setCurrentSizes, setCurrentQuantities }) => {
  return (
    <StyleThumbnailsDiv>
      {allProductStyles.map((styles) => {
        const tempSizeArray = [];
        const tempQuantityArray = [];
        const skus = Object.keys(styles.skus);
        for (let i = 0; i < skus.length; i++) {
          tempQuantityArray.push(styles.skus[skus[i]].quantity);
          tempSizeArray.push(styles.skus[skus[i]].size);
        }

        return (
          <StyleThumbnail
            currentProductStyle={currentProductStyle}
            setCurrentProductStyle={setCurrentProductStyle}
            thumbnailUrl={styles.photos[0].thumbnail_url}
            styleId={styles.style_id}
            styleOriginalPrice={styles.original_price}
            styleSalePrice={styles.sale_price}
            setCurrentOriginalPrice={setCurrentOriginalPrice}
            setCurrentSalePrice={setCurrentSalePrice}
            currentSalePrice={currentSalePrice}
            setCurrentSizes={setCurrentSizes}
            setCurrentQuantities={setCurrentQuantities}
            styleSizes={tempSizeArray}
            styleQuantities={tempQuantityArray}
          />
        );
      })}
    </StyleThumbnailsDiv>
  );
};

StyleSelector.propTypes = {
  allProductStyles: PropTypes.array,
  currentProductStyle: PropTypes.number,
  setCurrentProductStyle: PropTypes.func,
  setCurrentOriginalPrice: PropTypes.func,
  setCurrentSalePrice: PropTypes.func,
  currentSalePrice: PropTypes.string,
  setCurrentSizes: PropTypes.func,
  setCurrentQuantities: PropTypes.func,
};

export default StyleSelector;
