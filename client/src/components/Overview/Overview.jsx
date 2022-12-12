/* eslint-disable no-plusplus */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ProductInformation from './Product_Information/ProductInformation.jsx';
import ImageGallery from './Image_Gallery/ImageGallery.jsx';
import StyleSelector from './Style_Selector/StyleSelector.jsx';
import AddToCart from './Add_To_Cart/AddToCart.jsx';

/* ****************** styled-components ******************* */
const NavigationDiv = styled.div`
background: lightgrey;
height: 115px;
width: 100%;
border: solid;
font-size: 40px;
`;
const ImageGalleryDiv = styled.div`
position: relative;
left: 50px;
top: 50px;
`;
const StyleSelectorDiv = styled.div`
height: 200px;
width: 350px;
position: relative;
left: 1200px;
top: -450px;
`;
const AddToCartDiv = styled.div`
height: 300px;
width: 600px;
position: relative;
left: 1200px;
top: -1150px;
`;

const Overview = ({ currentID }) => {
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
  const [productStylePhotos, setProductStylePhotos] = useState([]);
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
  const [expandedImageViewActive, setExpandedImageViewActive] = useState(false);
  const [ImageIsZoomed, setImageIsZoomed] = useState(false);

  const [allQuantitiesZero, setAllQuantitiesZero] = useState(true);
  const [addToCartButtonIsVisible, setAddToCartButtonIsVisible] = useState(true);
  const [addToCartButtonIsDisabled, setAddToCartButtonIsDisabled] = useState(false);
  const [sizeSelectorIsDisabled, setSizeSelectorIsDisabled] = useState(false);
  const [productStyleSizeDropdownLength, setProductStyleSizeDropdownLength] = useState();

  /* ****************** axios requests ******************* */
  useEffect(() => {
    const parameters = { currentID };
    axios.get('/products').then((response) => {
      setAllProducts(response.data);
      setProductId(response.data[2].id);
      setProductTitle(response.data[2].name);
      setProductCategory(response.data[2].category);
      setProductOverview(response.data[2].description);
    }).then(() => {
      axios.get('/products/styles', {
        params: parameters
      }).then((response) => {
        setAllProductStyles(response.data.results);
        for (let i = 0; i < response.data.results.length; i++) {
          if (response.data.results[i]['default?']) {
            setProductStyleDefault(response.data.results[i]['default?']);
            setProductStyleId(currentID);
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
            setProductStyleQuantities(productStyleQuantitiesArray);
            setProductStyleSizes(productStyleSizesArray);
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
      setProductStyleSizeDropdownLength(productStyleSizes.length + 1);

    } else {
      for (let i = 0; i < Number(addToCartObject.count); i++) {
        axios.post('/cart', addToCartObject, { headers: { 'content-type': 'application/json' } }).then(() => {
          return axios.get('/cart');
        }).then((response) => {
          console.log('Database after POST: ', response.data);
        });
      }
    }

  };

  /* ****************** mapping products ******************* */
  return (
    <div>
      <NavigationDiv>Future Navigation Div</NavigationDiv>
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
          expandedImageViewActive={expandedImageViewActive}
          setExpandedImageViewActive={setExpandedImageViewActive}
          ImageIsZoomed={ImageIsZoomed}
          setImageIsZoomed={setImageIsZoomed}
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
          allQuantitiesZero={allQuantitiesZero}
          setAllQuantitiesZero={setAllQuantitiesZero}
          addToCartButtonIsVisible={addToCartButtonIsVisible}
          setAddToCartButtonIsVisible={setAddToCartButtonIsVisible}
          addToCartButtonIsDisabled={addToCartButtonIsDisabled}
          setAddToCartButtonIsDisabled={setAddToCartButtonIsDisabled}
          sizeSelectorIsDisabled={sizeSelectorIsDisabled}
          setSizeSelectorIsDisabled={setSizeSelectorIsDisabled}
          productStyleSizeDropdownLength={productStyleSizeDropdownLength}
          setProductStyleSizeDropdownLength={setProductStyleSizeDropdownLength}
        />
      </AddToCartDiv>
    </div>
  );
};

export default Overview;
