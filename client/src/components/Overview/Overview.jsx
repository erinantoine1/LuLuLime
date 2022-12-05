/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import axios from 'axios';
import PropTypes from 'prop-types';
// import { NavigationDiv, PlaceHolderDiv, ImageGalleryDiv, StyleSelectorDiv, AddToCartDiv } from './styles.js';

import ProductInformation from './Product_Information/ProductInformation.jsx';
import ImageGallery from './Image_Gallery/ImageGallery.jsx';
import StyleSelector from './Style_Selector/StyleSelector.jsx';
import AddToCart from './Add_To_Cart/AddToCart.jsx';

/* ****************** styled-components ******************* */
const NavigationDiv = styled.div`
background: lightgrey;
height: 200px;
width: 100%;
border: solid;
font-size: 40px;
`;
const PlaceHolderDiv = styled.div`
height: 150px;
width: 750px;
position: relative;
left: 300px;
`;
const ImageGalleryDiv = styled.div`
height: 650px;
width: 750px;
position: relative;
left: 300px;
border: dotted;
border-width: 3px;
`;
const StyleSelectorDiv = styled.div`
height: 200px;
width: 340px;
position: relative;
left: 1100px;
top: -475px;
`;
const AddToCartDiv = styled.div`
height: 300px;
width: 400px;
position: relative;
left: 1100px;
top: -1175px;
`;

const Overview = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [allProductStyles, setAllProductStyles] = useState([]);
  const [currentProductStyle, setCurrentProductStyle] = useState();
  const [currentOriginalPrice, setCurrentOriginalPrice] = useState('');
  const [currentSalePrice, setCurrentSalePrice] = useState('');
  const [currentSizes, setCurrentSizes] = useState([]);
  const [currentQuantities, setCurrentQuantities] = useState([]);
  const [currentSize, setCurrentSize] = useState('');
  const [currentQuantity, setCurrentQuantity] = useState('');


  /* ****************** axios requests ******************* */
  useEffect(() => {
    axios.get('/products')
      .then((response) => {
        setAllProducts(response.data);
      }).then(() => {
        axios.get('/products/40346/styles')
          .then((response) => {
            setAllProductStyles(response.data.results);
            let defaultIndex;
            for (let i = 0; i < response.data.results.length; i++) {
              if (response.data.results[i]['default?']) {
                setCurrentProductStyle(response.data.results[i].style_id);
                defaultIndex = i;
              }
              setCurrentSalePrice(response.data.results[i].sale_price);
              setCurrentOriginalPrice(response.data.results[i].original_price);

              // const skus = Object.keys(response.data.results[i].skus);

              // // const tempSizeArray = [];
              // // const tempQuantityArray = [];
              // const tempSizesArray = ['Select Size'];
              // const tempQuantitiesArray = [];
              // for (let j = 0; j < skus.length; j++) {
              //   // tempSizeArray.push(response.data.results[defaultIndex].skus[skus[j]].size);
              //   tempSizesArray.push(response.data.results[i].skus[skus[j]].size);
              //   tempQuantitiesArray.push(response.data.results[i].skus[skus[j]].quantity);
              // }
              // setCurrentSizes(tempSizesArray);
              // setCurrentQuantities(tempQuantitiesArray);



            }
          });
      });
  }, []);

  // .then(() => {
  //   axios.get('/reviews')
  //     .then((response) => {
  //       console.log(response.data);
  //       setAllReviews(response.data);
  //     });
  // });

  /* ****************** mapping products ******************* */
  const prods = (
    allProducts.map((product) => {
      return (
        <div className="allProductsMap">
          <NavigationDiv>Future Navigation Div</NavigationDiv>
          <PlaceHolderDiv />
          <ImageGalleryDiv>
            <ImageGallery />
          </ImageGalleryDiv>
          <br />
          <StyleSelectorDiv>
            Select Style:
            <StyleSelector
              allProductStyles={allProductStyles}
              currentProductStyle={currentProductStyle}
              setCurrentProductStyle={setCurrentProductStyle}
              setCurrentOriginalPrice={setCurrentOriginalPrice}
              setCurrentSalePrice={setCurrentSalePrice}
              setCurrentSizes={setCurrentSizes}
              setCurrentQuantities={setCurrentQuantities}
              currentSalePrice={currentSalePrice}
            />
          </StyleSelectorDiv>
          <ProductInformation
            productTitle={product.name}
            productCategory={product.category}
            productDescription={product.description}
            currentOriginalPrice={currentOriginalPrice}
            currentSalePrice={currentSalePrice}
          />
          <AddToCartDiv>
            <AddToCart currentSizes={currentSizes} currentQuantities={currentQuantities} currentSize={currentSize} currentQuantity={currentQuantity} setCurrentSize={setCurrentSize} setCurrentQuantity={setCurrentQuantity} />
          </AddToCartDiv>
        </div>
      );
    })
  );
  return prods[2];
};

/* ****************** check prop-types ******************* */
Overview.propTypes = {
  product: PropTypes.object,
};

export default Overview;
