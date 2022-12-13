import axios from 'axios';
import React, { createContext } from 'react';

export const generateChoices = (characteristicName) => {
  const choices = {};
  if (characteristicName === 'Size') {
    choices[1] = 'A size too small';
    choices[2] = 'Half a size too small';
    choices[3] = 'Perfect';
    choices[4] = 'Half a size too big';
    choices[5] = 'A size too wide';
  } else if (characteristicName === 'Width') {
    choices[1] = 'Too narrow';
    choices[2] = 'Slightly narrow';
    choices[3] = 'Perfect';
    choices[4] = 'Slightly wide';
    choices[5] = 'Too wide';
  } else if (characteristicName === 'Comfort') {
    choices[1] = 'Uncomfortable';
    choices[2] = 'Slightly uncomfortable';
    choices[3] = 'Ok';
    choices[4] = 'Comfortable';
    choices[5] = 'Perfect';
  } else if (characteristicName === 'Quality') {
    choices[1] = 'Poor';
    choices[2] = 'Below average';
    choices[3] = 'What I expected';
    choices[4] = 'Pretty great';
    choices[5] = 'Perfect';
  } else {
    choices[1] = 'Runs Short';
    choices[2] = 'Runs slightly short';
    choices[3] = 'Runs Perfect';
    choices[4] = 'Runs slightly long';
    choices[5] = 'Runs Long';
  }
  return choices;
};

export const getReviewsData = (url, product_id, sort, count) => {
  const queries = { product_id, sort, count };
  if (url === '/reviews') {
    return axios.get(`${url}`, {
      params: queries
    });
  }
  return axios.get(`${url}`, {
    params: {
      product_id
    }
  });
};

export const StarContext = createContext({ starRatings: 0, setStarRatings: () => {} });
