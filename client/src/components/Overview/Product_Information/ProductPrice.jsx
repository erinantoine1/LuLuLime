/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
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

const ProductPrice = ({ currentOriginalPrice, currentSalePrice }) => {
  let salePrice;
  let originalPrice;
  let originaNoSale;

  if (currentSalePrice === null || currentSalePrice === undefined) {
    originaNoSale = (
      <OriginalPriceNoSale>{ `$${currentOriginalPrice}` }</OriginalPriceNoSale>
    );
  }
  return (
    <div>
      <OriginalPriceNoSale style={currentSalePrice === null || currentSalePrice === undefined ? { display: 'block' } : { display: 'none' }}>{ `$${currentOriginalPrice}` }</OriginalPriceNoSale>
      <OriginalPriceSale style={currentSalePrice ? { display: 'block' } : { display: 'none' }}>{ `$${currentOriginalPrice}` }</OriginalPriceSale>
      <SalePriceDiv style={currentSalePrice ? { display: 'block' } : { display: 'none' }}>{ `$${currentSalePrice}` }</SalePriceDiv>
    </div>
  );
};

ProductPrice.propTypes = {
  currentOriginalPrice: PropTypes.string,
  currentSalePrice: PropTypes.string,
};

export default ProductPrice;
