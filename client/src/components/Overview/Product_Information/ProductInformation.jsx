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
position: relative;
top: -800px;
left: 1325px;
`;
const PriceDiv = styled.div`
height: 150px;
width: 350px;
position: relative;
top: -1100px;
left: 1200px;
`;
const CategoryOverviewDiv = styled.div`
height: 200px;
width: 350px;
position: relative;
top: -1025px;
left: 1200px;
`;
const TitleRatingDiv = styled.div`
height: 200px;
width: 700px;
position: relative;
top: -925px;
left: 1250px;
`;
const TitleDiv = styled.div`
font-size: 28px;
`;
const ProductInformationDiv = styled.div`
height: 1rem;
`;
const ProductInformation = (
  ({
    productTitle, productCategory, productOverview, productStyleOriginalPrice, productStyleSalePrice,
  }) => {
    return (
      <ProductInformationDiv>
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
          <ProductOverview productOverview={productOverview} />
        </CategoryOverviewDiv>
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
