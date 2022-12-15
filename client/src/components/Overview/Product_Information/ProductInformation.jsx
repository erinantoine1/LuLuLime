import React from 'react';
import styled from 'styled-components';
import ProductTitle from './ProductTitle.jsx';
import StarRating from './StarRating.jsx';
import ProductCategory from './ProductCategory.jsx';
import ProductPrice from './ProductPrice.jsx';
import ProductOverview from './ProductOverview.jsx';
import Share from './Share.jsx';

const ShareDiv = styled.div`
height: 200px;
width: 350px;
position: absolute;
left: 50%;
`;
const PriceDiv = styled.div`
height: 150px;
width: 350px;
position: absolute;
margin-top: 67%;
margin-left: -2%;
`;
const CategoryDiv = styled.div`
height: 200px;
width: 350px;
font-size: 14px;
text-decoration: underline;
position: absolute;
`;
const RatingDiv = styled.div`
height: 200px;
width: 700px;
position: absolute;
margin-top: 30%;
`;
const OverviewDiv = styled.div`
height: 200px;
width: 400px;
position: relative;
margin-top: 40%;
`;
const TitleDiv = styled.div`
font-size: 36px;
height: 200px;
width: 700px;
position: absolute;
`;
const ProductInformationDiv = styled.div`
height: 1rem;
margin-top: 5%;
position: relative;
display: flex;
flex-wrap: wrap;
`;
const ProductInformation = (
  ({
    productTitle, productCategory, productOverview, productStyleOriginalPrice, productStyleSalePrice, starRating
  }) => {
    return (
      <ProductInformationDiv>
        <CategoryDiv>
          <ProductCategory productCategory={productCategory} />
        </CategoryDiv>
        <TitleDiv>
          <ProductTitle productTitle={productTitle} />
        </TitleDiv>
        <RatingDiv>
          <StarRating starRating={starRating} />
        </RatingDiv>
        <OverviewDiv>
          <ProductOverview productOverview={productOverview} />
        </OverviewDiv>
        <PriceDiv>
          <ProductPrice productStyleOriginalPrice={productStyleOriginalPrice} productStyleSalePrice={productStyleSalePrice} />
        </PriceDiv>
        <ShareDiv>
          <Share />
        </ShareDiv>
      </ProductInformationDiv>
    );
  });

export default ProductInformation;
