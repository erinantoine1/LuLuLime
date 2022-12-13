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
top: 10%;
left: 67%;
`;
const PriceDiv = styled.div`
height: 150px;
width: 350px;
position: absolute;
top: 26%;
left: 59%;
`;
const CategoryDiv = styled.div`
height: 200px;
width: 350px;
font-size: 14px;
text-decoration: underline;
position: absolute;
top: 10%;
left: 59%;
`;
const RatingDiv = styled.div`
height: 200px;
width: 700px;
position: absolute;
top: 20%;
left: 59%;
`;
const OverviewDiv = styled.div`
height: 200px;
width: 400px;
position: absolute;
top: 32%;
left: 59%;
`;
const TitleDiv = styled.div`
font-size: 40px;
height: 200px;
width: 700px;
position: absolute;
top: 15%;
left: 59%
`;
const ProductInformationDiv = styled.div`
height: 1rem;
display: flex;
flex-wrap: wrap;
margin-top: 5%;
`;
const ProductInformation = (
  ({
    productTitle, productCategory, productOverview, productStyleOriginalPrice, productStyleSalePrice,
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
          <StarRating />
        </RatingDiv>
        <PriceDiv>
          <ProductPrice productStyleOriginalPrice={productStyleOriginalPrice} productStyleSalePrice={productStyleSalePrice} />
        </PriceDiv>
        <OverviewDiv>
          <ProductOverview productOverview={productOverview} />
        </OverviewDiv>
        <ShareDiv>
          <Share />
        </ShareDiv>
      </ProductInformationDiv>
    );
  });

export default ProductInformation;
