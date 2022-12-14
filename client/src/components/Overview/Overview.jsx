/* eslint-disable no-plusplus */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ProductInformation from './Product_Information/ProductInformation.jsx';
import ImageGallery from './Image_Gallery/ImageGallery.jsx';
import StyleSelector from './Style_Selector/StyleSelector.jsx';
import AddToCart from './Add_To_Cart/AddToCart.jsx';

/* ****************** styled-components ******************* */
const OverviewDiv = styled.div`
display: flex;
flex-wrap: wrap;
width: 80vw;
height: 85vh;
flex-direction: columns;
margin: auto;
border-bottom: solid 1px grey;
box-shadow: 0.0625rem 0.125rem #e8e7e4;
background-color: white;
border-radius: 10px;
`;

const LeftOverviewDiv = styled.div`
  order: 1;
  height: 100%;
  width: 60%;
  border-radius: 10px;
`;

const ImageGalleryDiv = styled.div`
  height: 100%;
`;

const RightOverviewDiv = styled.div`
  order: 2;
  display: flex;
  height: 88%;
  width: 30%;
  border-radius: 10px;
  position: relative;
  align-self: center;
`;

const AddToCartDiv = styled.div`
order: 3;
position: absolute;
align-content: center;
top: 78%;
left: 5%
`;

const StyleSelectorDiv = styled.div`
order: 2;
position: relative;
top: 46%;
`;

const ProductInformationDiv = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  order: 1;
`;


const Overview = ({ currentID, starRating }) => {
  /* ****************** initial state declarations ******************* */
  const [allProducts, setAllProducts] = useState([]);
  const [productTitle, setProductTitle] = useState();
  const [productCategory, setProductCategory] = useState();
  const [productOverview, setProductOverview] = useState();
  const [productId, setProductId] = useState(currentID);

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
      setProductId(currentID);
    })
      .then(() => {
        return axios.get('/currentItem', { params: { product_id: currentID }
        });
      })
      .then((response) => {
        console.log('this is it: ', response);
        setProductTitle(response.data.name);
        setProductCategory(response.data.category);
        setProductOverview(response.data.description);
      })
      .then(() => {
        axios.get('/products/styles', {
          params: parameters
        }).then((response) => {
          console.log('line 76: ', response.data);
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
              setProductStyleQuantities(productStyleQuantitiesArray);
              setProductStyleSizes(productStyleSizesArray);
            }
          }
        });
      });
  }, [currentID]);

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
    <OverviewDiv>
      <LeftOverviewDiv>
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
      </LeftOverviewDiv>
      <RightOverviewDiv>
        <ProductInformationDiv>
          <ProductInformation
            productId={currentID}
        // setProductId={setProductId}
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
            starRating={starRating}
          />
        </ProductInformationDiv>
        <AddToCartDiv>
          <AddToCart
            productStyleId={currentID}
          // setProductStyleId={setProductStyleId}
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
        <StyleSelectorDiv>
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
      </RightOverviewDiv>
    </OverviewDiv>
  );
};

export default Overview;
