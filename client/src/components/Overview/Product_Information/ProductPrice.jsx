import React from 'react';
import styled from 'styled-components';

const OriginalPriceNoSale = styled.div`
height: 150px;
width: 350px;
position: relative;
top: -10px;
left: 10px;
font-size: 40px;
color: red;
`;
const OriginalPriceSale = styled.div`
height: 150px;
width: 350px;
position: relative;
top: 0px;
left: 125px;
font-size: 20px;
color: black;
text-decoration: line-through;
`;
const SalePriceDiv = styled.div`
height: 150px;
width: 350px;
position: relative;
top: -160px;
left: 10px;
font-size: 40px;
color: red;
`;

const ProductPrice = ({ productStyleOriginalPrice, currentSalePrice }) => {
  let salePrice;
  let originalPrice;
  let originaNoSale;

  if (currentSalePrice === null || currentSalePrice === undefined) {
    originaNoSale = (
      <OriginalPriceNoSale>{ `$${productStyleOriginalPrice}` }</OriginalPriceNoSale>
    );
  }
  return (
    <div>
      <OriginalPriceNoSale style={currentSalePrice === null || currentSalePrice === undefined ? { display: 'block' } : { display: 'none' }}>{ `$${productStyleOriginalPrice}` }</OriginalPriceNoSale>
      <OriginalPriceSale style={currentSalePrice ? { display: 'block' } : { display: 'none' }}>{ `$${productStyleOriginalPrice}` }</OriginalPriceSale>
      <SalePriceDiv style={currentSalePrice ? { display: 'block' } : { display: 'none' }}>{ `$${currentSalePrice}` }</SalePriceDiv>
    </div>
  );
};

export default ProductPrice;
