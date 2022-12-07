/* eslint-disable indent */
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
width: 850px;
position: relative;
left: 200px;
border: dotted;
border-width: 3px;
`;
const StyleSelectorDiv = styled.div`
height: 200px;
width: 340px;
position: relative;
left: 1250px;
top: -475px;
`;
const AddToCartDiv = styled.div`
height: 300px;
width: 600px;
position: relative;
left: 1250px;
top: -1175px;
`;

const Overview = () => {
  /* ****************** initial state declarations ******************* */
  const [allProducts, setAllProducts] = useState([]);
  const [productId, setProductId] = useState();
  const [productTitle, setProductTitle] = useState();
  const [productCategory, setProductCategory] = useState();
  const [productOverview, setProductOverview] = useState();

  const [allProductStyles, setAllProductStyles] = useState([]);
  const [productStyleDefault, setProductStyleDefault] = useState();
  const [productStyleId, setProductStyleId] = useState();
  const [productStyleName, setProductStyleName] = useState();
  const [productStyleOriginalPrice, setProductStyleOriginalPrice] = useState();
  const [productStyleSalePrice, setProductStyleSalePrice] = useState();
  const [productStylePhotos, setProductStylePhotos] = useState();
  const [productStyleSku, setProductStyleSku] = useState();
  const [productStyleSkus, setProductStyleSkus] = useState();
  const [productStyleSize, setProductStyleSize] = useState();
  const [productStyleQuantity, setProductStyleQuantity] = useState();
  const [productStyleSizes, setProductStyleSizes] = useState([]);
  const [productStyleQuantities, setProductStyleQuantities] = useState([]);
  const [undefinedSizeSubmitted, setUndefinedSizeSubmitted] = useState(false);
  const [quantitySelectorIsDisabled, setQuantitySelectorIsDisabled] = useState(true);
  const [dropdownQuantitiesArray, setDropdownQuantitiesArray] = useState(['-']);
  const [currentThumbnailUrl, setCurrentThumbnailUrl] = useState('');
  const [currentPhotoUrl, setCurrentPhotoUrl] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  /* ****************** axios requests ******************* */
  useEffect(() => {
    axios.get('/products')
      .then((response) => {
        setAllProducts(response.data);
        setProductId(response.data[2].id);
        setProductTitle(response.data[2].name);
        setProductCategory(response.data[2].category);
        setProductOverview(response.data[2].description);
      }).then(() => {
        axios.get('/products/40346/styles')
          .then((response) => {
            setAllProductStyles(response.data.results);
            for (let i = 0; i < response.data.results.length; i++) {
              if (response.data.results[i]['default?']) {
                setProductStyleDefault(response.data.results[i]['default?']);
                setProductStyleId(response.data.results[i].style_id);
                setProductStyleName(response.data.results[i].name);
                setProductStyleOriginalPrice(response.data.results[i].original_price);
                setProductStyleSalePrice(response.data.results[i].sale_price);
                setProductStylePhotos(response.data.results[i].photos);
                setProductStyleSkus(response.data.results[i].skus);

                const skuKeys = Object.keys(response.data.results[i].skus);
                const productStyleSizesArray = [];
                const productStyleQuantitiesArray = [];
                for (let j = 0; j < skuKeys.length; j++) {
                  productStyleSizesArray.push(response.data.results[i].skus[skuKeys[j]].size);
                  productStyleQuantitiesArray.push(response.data.results[i].skus[skuKeys[j]].quantity);
                }

                setProductStyleSizes(productStyleSizesArray);
                setProductStyleQuantities(productStyleQuantitiesArray);
              }
            }
          });
      });
  }, []);
  const AddToCartSubmit = () => {

    const addToCartObject = {
      sku_id: productStyleSku,
      count: productStyleQuantity,
    };

    if (addToCartObject.count === undefined) {
      addToCartObject.count = 1;
    }

    if (productStyleSize === undefined || productStyleSize === 'Select Size') {
      setUndefinedSizeSubmitted(true);
    }

    for (let i = 0; i < Number(addToCartObject.count); i++) {
      axios.post('/cart', addToCartObject, { headers: { 'content-type': 'application/json' } }).then(() => {
        return axios.get('/cart');
      }).then((response) => {
        console.log('Database after POST: ', response.data);
      });
    }
  };

    // then set default settings again
    // setUndefinedSizeSubmitted(false);

    /* ****************** mapping products ******************* */
    return (
      <div>
        <NavigationDiv>Future Navigation Div</NavigationDiv>
        <PlaceHolderDiv />
        <ImageGalleryDiv>
          <ImageGallery
            allProductStyles={allProductStyles}
            setAllProductStyles={setAllProductStyles}
            productStyleDefault={productStyleDefault}
            setProductStyleDefault={setProductStyleDefault}
            productStyleId={productStyleId}
            setProductStyleId={setProductStyleId}
            productStyleName={productStyleName}
            setProductStyleName={setProductStyleName}
            productStyleOriginalPrice={productStyleOriginalPrice}
            setProductStyleOriginalPrice={setProductStyleOriginalPrice}
            productStyleSalePrice={productStyleSalePrice}
            setProductStyleSalePrice={setProductStyleSalePrice}
            productStylePhotos={productStylePhotos}
            setProductStylePhotos={setProductStylePhotos}
            productStyleSku={productStyleSku}
            setProductStyleSku={setProductStyleSku}
            productStyleSkus={productStyleSkus}
            setProductStyleSkus={setProductStyleSkus}
            productStyleSize={productStyleSize}
            setProductStyleSize={setProductStyleSize}
            productStyleQuantity={productStyleQuantity}
            setProductStyleQuantity={setProductStyleQuantity}
            productStyleSizes={productStyleSizes}
            setProductStyleSizes={setProductStyleSizes}
            productStyleQuantities={productStyleQuantities}
            setProductStyleQuantities={setProductStyleQuantities}
            undefinedSizeSubmitted={undefinedSizeSubmitted}
            setUndefinedSizeSubmitted={setUndefinedSizeSubmitted}
            quantitySelectorIsDisabled={quantitySelectorIsDisabled}
            setQuantitySelectorIsDisabled={setQuantitySelectorIsDisabled}
            dropdownQuantitiesArray={dropdownQuantitiesArray}
            setDropdownQuantitiesArray={setDropdownQuantitiesArray}
            currentThumbnailUrl={currentThumbnailUrl}
            setCurrentThumbnailUrl={setCurrentThumbnailUrl}
            currentPhotoUrl={currentPhotoUrl}
            setCurrentPhotoUrl={setCurrentPhotoUrl}
            currentImageIndex={currentImageIndex}
            setCurrentImageIndex={setCurrentImageIndex}
          />
        </ImageGalleryDiv>
        <br />
        <StyleSelectorDiv>
          Select Style:
          <StyleSelector
            allProductStyles={allProductStyles}
            setAllProductStyles={setAllProductStyles}
            productStyleDefault={productStyleDefault}
            setProductStyleDefault={setProductStyleDefault}
            productStyleId={productStyleId}
            setProductStyleId={setProductStyleId}
            productStyleName={productStyleName}
            setProductStyleName={setProductStyleName}
            productStyleOriginalPrice={productStyleOriginalPrice}
            setProductStyleOriginalPrice={setProductStyleOriginalPrice}
            productStyleSalePrice={productStyleSalePrice}
            setProductStyleSalePrice={setProductStyleSalePrice}
            productStylePhotos={productStylePhotos}
            setProductStylePhotos={setProductStylePhotos}
            productStyleSku={productStyleSku}
            setProductStyleSku={setProductStyleSku}
            productStyleSkus={productStyleSkus}
            setProductStyleSkus={setProductStyleSkus}
            productStyleSize={productStyleSize}
            setProductStyleSize={setProductStyleSize}
            productStyleQuantity={productStyleQuantity}
            setProductStyleQuantity={setProductStyleQuantity}
            productStyleSizes={productStyleSizes}
            setProductStyleSizes={setProductStyleSizes}
            productStyleQuantities={productStyleQuantities}
            setProductStyleQuantities={setProductStyleQuantities}
            undefinedSizeSubmitted={undefinedSizeSubmitted}
            setUndefinedSizeSubmitted={setUndefinedSizeSubmitted}
            quantitySelectorIsDisabled={quantitySelectorIsDisabled}
            setQuantitySelectorIsDisabled={setQuantitySelectorIsDisabled}
            dropdownQuantitiesArray={dropdownQuantitiesArray}
            setDropdownQuantitiesArray={setDropdownQuantitiesArray}
          />
        </StyleSelectorDiv>
        <ProductInformation
          productId={productId}
          setProductId={setProductId}
          productTitle={productTitle}
          setProductTitle={setProductTitle}
          productCategory={productCategory}
          setProductCategory={setProductCategory}
          productOverview={productOverview}
          setProductOverview={setProductOverview}
          productStyleOriginalPrice={productStyleOriginalPrice}
          setProductStyleOriginalPrice={setProductStyleOriginalPrice}
          productStyleSalePrice={productStyleSalePrice}
          setProductStyleSalePrice={setProductStyleSalePrice}
        />
        <AddToCartDiv>
          <AddToCart
            productStyleId={productStyleId}
            setProductStyleId={setProductStyleId}
            productStyleName={productStyleName}
            setProductStyleName={setProductStyleName}
            productStyleOriginalPrice={productStyleOriginalPrice}
            setProductStyleOriginalPrice={setProductStyleOriginalPrice}
            productStyleSalePrice={productStyleSalePrice}
            setProductStyleSalePrice={setProductStyleSalePrice}
            productStylePhotos={productStylePhotos}
            setProductStylePhotos={setProductStylePhotos}
            productStyleSku={productStyleSku}
            setProductStyleSku={setProductStyleSku}
            productStyleSkus={productStyleSkus}
            setProductStyleSkus={setProductStyleSkus}
            productStyleSize={productStyleSize}
            setProductStyleSize={setProductStyleSize}
            productStyleQuantity={productStyleQuantity}
            setProductStyleQuantity={setProductStyleQuantity}
            productStyleSizes={productStyleSizes}
            setProductStyleSizes={setProductStyleSizes}
            productStyleQuantities={productStyleQuantities}
            setProductStyleQuantities={setProductStyleQuantities}
            AddToCartSubmit={AddToCartSubmit}
            undefinedSizeSubmitted={undefinedSizeSubmitted}
            setUndefinedSizeSubmitted={setUndefinedSizeSubmitted}
            quantitySelectorIsDisabled={quantitySelectorIsDisabled}
            setQuantitySelectorIsDisabled={setQuantitySelectorIsDisabled}
            dropdownQuantitiesArray={dropdownQuantitiesArray}
            setDropdownQuantitiesArray={setDropdownQuantitiesArray}
          />
        </AddToCartDiv>
      </div>
      );
};

export default Overview;
