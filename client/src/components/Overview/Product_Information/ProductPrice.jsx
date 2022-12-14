import React from 'react';
import styled from 'styled-components';

const OriginalPriceNoSale = styled.div`
height: 150px;
width: 350px;
position: relative;
top: -10px;
left: 10px;
font-size: 40px;
color: teal;
`;
const OriginalPriceSale = styled.div`
height: 150px;
width: 350px;
position: relative;
top: 0px;
left: 160px;
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

const ProductPrice = ({ productStyleOriginalPrice, productStyleSalePrice }) => {
  let salePrice;
  let originalPrice;
  let originaNoSale;

  if (productStyleSalePrice === null || productStyleSalePrice === undefined) {
    originaNoSale = (
      <OriginalPriceNoSale>{ `$${productStyleOriginalPrice}` }</OriginalPriceNoSale>
    );
  }
  return (
    <div>
      <OriginalPriceNoSale style={productStyleSalePrice === null || productStyleSalePrice === undefined ? { display: 'block' } : { display: 'none' }}>{ `$${productStyleOriginalPrice}` }</OriginalPriceNoSale>
      <OriginalPriceSale style={productStyleSalePrice ? { display: 'block' } : { display: 'none' }}>{ `$${productStyleOriginalPrice}` }</OriginalPriceSale>
      <SalePriceDiv style={productStyleSalePrice ? { display: 'block' } : { display: 'none' }}>{ `$${productStyleSalePrice}` }</SalePriceDiv>
    </div>
  );
};

export default ProductPrice;
