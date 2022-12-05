/* eslint-disable max-len */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ProductTitle from './ProductTitle.jsx';
import StarRating from './StarRating.jsx';
import ProductCategory from './ProductCategory.jsx';
import ProductPrice from './ProductPrice.jsx';
import ProductOverview from './ProductOverview.jsx';
import Share from './Share.jsx';

const ShareDiv = styled.div`
height: 200px;
width: 350px;
position: relative;
top: -850px;
left: 1225px;
`;
const PriceDiv = styled.div`
height: 150px;
width: 350px;
position: relative;
top: -1125px;
left: 1100px;
`;
const CategoryOverviewDiv = styled.div`
height: 200px;
width: 350px;
position: relative;
top: -1050px;
left: 1100px;
`;
const TitleRatingDiv = styled.div`
height: 200px;
width: 700px;
position: relative;
top: -975px;
left: 300px;
`;
const TitleDiv = styled.div`
font-size: 28px;
`;

const ProductInformation = (
  ({
    productTitle, productCategory, productDescription, currentOriginalPrice, currentSalePrice,
  }) => {
    return (
      <div>
        <TitleRatingDiv>
          <TitleDiv>
            <ProductTitle productTitle={productTitle} />
          </TitleDiv>
          <br />
          <StarRating />
        </TitleRatingDiv>
        <CategoryOverviewDiv>
          <ProductCategory productCategory={productCategory} />
          <br />
          <ProductOverview productDescription={productDescription} />
        </CategoryOverviewDiv>
        <PriceDiv>
          <ProductPrice currentOriginalPrice={currentOriginalPrice} currentSalePrice={currentSalePrice} />
        </PriceDiv>
        <ShareDiv>
          <Share />
        </ShareDiv>
      </div>
    );
  });

ProductInformation.propTypes = {
  productTitle: PropTypes.string,
  productCategory: PropTypes.string,
  productDescription: PropTypes.string,
  currentOriginalPrice: PropTypes.string,
  currentSalePrice: PropTypes.string,
};

export default ProductInformation;
