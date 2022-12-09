import React from 'react';
import styled from 'styled-components';
import StyleThumbnail from './StyleThumbnail.jsx';

const StyleThumbnailsDiv = styled.div`
height: 190px;
border: solid;
`;
const StyleThumbnail1 = styled.div`
position: relative;
left: 25px;
top: 25px;
`;
const StyleThumbnail2 = styled.div`
position: relative;
left: 105px;
top: -28px;
`;
const StyleThumbnail3 = styled.div`
position: relative;
left: 180px;
top: -81px;
`;
const StyleThumbnail4 = styled.div`
position: relative;
left: 255px;
top: -133px;
`;
const StyleThumbnail5 = styled.div`
position: relative;
left: 25px;
top: -105px;
`;
const StyleThumbnail6 = styled.div`
position: relative;
left: 105px;
top: -158px;
`;
const StyleThumbnail7 = styled.div`
position: relative;
left: 180px;
top: -210px;
`;
const StyleThumbnail8 = styled.div`
position: relative;
left: 255px;
top: -263px;
`;
const ThumbnailStyleName = styled.div`
height: 30px;
width: 200px;
position: relative;
left: 0px;
top: 0px;
`;

const StyleSelector = (
  ({
    allProductStyles, setAllProductStyles, productStyleDefault, setProductStyleDefault, productStyleId, setProductStyleId, productStyleName, setProductStyleName, productStyleOriginalPrice, setProductStyleOriginalPrice, productStyleSalePrice, setProductStyleSalePrice, productStylePhotos, setProductStylePhotos, productStyleSku, setProductStyleSku, productStyleSkus, setProductStyleSkus, productStyleSize, setProductStyleSize, productStyleQuantity, setProductStyleQuantity, productStyleSizes, setProductStyleSizes, productStyleQuantities, setProductStyleQuantities, undefinedSizeSubmitted, setUndefinedSizeSubmitted, quantitySelectorIsDisabled, setQuantitySelectorIsDisabled, dropdownQuantitiesArray, setDropdownQuantitiesArray
  }) => {
    return (
      <div>
        <ThumbnailStyleName>{productStyleName}</ThumbnailStyleName>
        <StyleThumbnailsDiv>
          {allProductStyles.map((styles) => {
            return (
              <StyleThumbnail
                productStyleId={productStyleId}
                setProductStyleId={setProductStyleId}
                styleId={styles.style_id}
                productStyleName={productStyleName}
                setProductStyleName={setProductStyleName}
                styleName={styles.name}
                productStyleOriginalPrice={productStyleOriginalPrice}
                setProductStyleOriginalPrice={setProductStyleOriginalPrice}
                styleOriginalPrice={styles.original_price}
                productStyleSalePrice={productStyleSalePrice}
                setProductStyleSalePrice={setProductStyleSalePrice}
                styleSalePrice={styles.sale_price}
                productStylePhotos={productStylePhotos}
                setProductStylePhotos={setProductStylePhotos}
                stylePhotos={styles.photos}
                productStyleSkus={productStyleSkus}
                setProductStyleSkus={setProductStyleSkus}
                styleSkus={styles.skus}
                productStyleSize={productStyleSize}
                setProductStyleSize={setProductStyleSize}
                productStyleQuantity={productStyleQuantity}
                setProductStyleQuantity={setProductStyleQuantity}
                productStyleSizes={productStyleSizes}
                setProductStyleSizes={setProductStyleSizes}
                productStyleQuantities={productStyleQuantities}
                setProductStyleQuantities={setProductStyleQuantities}
                productStyleSku={productStyleSku}
                setProductStyleSku={setProductStyleSku}
                quantitySelectorIsDisabled={quantitySelectorIsDisabled}
                setQuantitySelectorIsDisabled={setQuantitySelectorIsDisabled}
                dropdownQuantitiesArray={dropdownQuantitiesArray}
                setDropdownQuantitiesArray={setDropdownQuantitiesArray}
              />
            );
          })}
        </StyleThumbnailsDiv>
      </div>
    );
  });

export default StyleSelector;
