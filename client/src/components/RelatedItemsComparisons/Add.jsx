import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const StyledCard = styled.div`
  box-shadow: 0.2rem 0.2rem 0.2rem 0.2rem #e8e7e4;
  -webkit-box-shadow: 0.2rem 0.2rem 0.2rem 0.2rem #e8e7e4;
  -moz-box-shadow: 0.2rem 0.2rem 0.2rem 0.2rem #e8e7e4;
  background: #fff;
  cursor: pointer;
  height: 375px;
  position: relative;
  width: ${props => props.width / 4}px;
`;

const Plus = styled.h1`
  font-size: 5rem;
  margin-top: 25%;
`;

const Title = styled.h2`
  margin-top: 10%;
`;

const getAverageRating = (ratings) => {
  let totalRating = 0;
  let totalRatings = 0;
  Object.entries(ratings).forEach((pair) => {
    totalRating += (Number(pair[0]) * Number(pair[1]));
    totalRatings += (Number(pair[1]));
  });
  return Math.round((totalRating / totalRatings) * 10) / 10;
};

const Add = ({ outfitItems, setOutfitItems, cardWidth, currentID }) => {
  const [currentItem, setCurrentItem] = useState({});
  const [style, setStyle] = useState({});
  const [ratings, setRatings] = useState(0);

  useEffect(() => {
    axios.get('/currentItem', { params: { product_id: currentID } })
      .then(res => {
        setCurrentItem({ ...currentItem, name: res.data.name, category: res.data.category, default_price: res.data.default_price, id: res.data.id });
      })
      .catch(err => console.error(err));

    axios.get('/currentItem/styles', { params: { product_id: currentID } })
      .then(res => {
        const temp = {};
        let hasDefault = false;
        for (let i = 0; i < res.data.results.length; i++) {
          if (res.data.results[i]['default?']) {
            hasDefault = true;
            temp.sale_price = res.data.results[i].sale_price;
            if (typeof res.data.results[i].photos[0].url === 'string') {
              temp.pictures = res.data.results[i].photos[0].url;
            } else {
              temp.pictures = 'https://media.allure.com/photos/5adba084276cd40c0eb8f42e/16:9/w_2560%2Cc_limit/GettyImages-826492462.jpg';
            }
          }
        }
        if (!hasDefault) {
          if (typeof res.data.results[0].photos[0].url === 'string') {
            temp.pictures = res.data.results[0].photos[0].url;
          } else {
            temp.pictures = 'https://media.allure.com/photos/5adba084276cd40c0eb8f42e/16:9/w_2560%2Cc_limit/GettyImages-826492462.jpg';
          }
        }
        setStyle(temp);
      })
      .catch(err => console.error(err));

    axios.get('/reviews/meta', { params: { product_id: currentID } })
      .then(res => {
        setRatings(getAverageRating(res.data.ratings));
      })
      .catch(err => console.error(err));
  }, [currentID]);

  const addItem = () => {
    if (!outfitItems.some(item => item.name === currentItem.name)) {
      const copy = [...outfitItems];
      const item = { ...currentItem, ...style, ratings };
      copy.unshift(item);
      localStorage.setItem('yourOutfit', JSON.stringify(copy));
      setOutfitItems(copy);
    }
  };

  return (
    <StyledCard width={cardWidth} onClick={addItem}>
      <Title>Add to Outfit</Title>
      <Plus>+</Plus>
    </StyledCard>
  );
};

export default Add;
