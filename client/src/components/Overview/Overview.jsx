// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import ProductInformation from './Product_Information/ProductInformation.jsx';
import ImageGallery from './Image_Gallery/ImageGallery.jsx';
import StyleSelector from './Style_Selector/StyleSelector.jsx';
import AddToCart from './Add_To_Cart/AddToCart.jsx';
// import axios from 'axios';
// //require('dotenv').config();

// const API_KEY = process.env.REACT_APP_API_KEY;
// const API_URL = process.env.REACT_APP_API_URL;

const Overview = () => {

  // const getProducts = () => {

  //  return axios.get(`${API_URL}/products`, { headers: {
  //   Authorization: `token ${API_KEY}`,
  //   'Access-Control-Allow-Headers': 'Authorization'
  // }});
  //     .then((response) => {
  //       console.log(response.data);
  //     });
  // };

  // useEffect(() => {
  //   getProducts();
  // }, []);

  return (
    <div>
      Overview Module
      <ul>
        <li><ProductInformation /></li>
        <li><ImageGallery /></li>
        <li><StyleSelector /></li>
        <li><AddToCart /></li>
      </ul>
    </div>
  );
};

export default Overview;
