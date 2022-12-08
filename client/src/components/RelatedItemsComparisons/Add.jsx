import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const StyledCard = styled.div`
  box-shadow: 0 1px 0.5rem -4px #000;
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

const Add = ({ outfitItems, setOutfitItems, cardWidth, currentID }) => {
  const [currentItem, setCurrentItem] = useState({});
  const [photo, setPhoto] = useState('');

  useEffect(() => {
    axios.get('/currentItem', { params: { product_id: currentID } })
      .then(res => {
        setCurrentItem({ ...currentItem, name: res.data.name, category: res.data.category, default_price: res.data.default_price });
      })
      .catch(err => console.error(err));
    axios.get('/currentItem/styles', { params: { product_id: currentID } })
      .then(res => {
        setPhoto(res.data.results[0].photos[0].url);
      })
      .catch(err => console.error(err));

  }, []);
  const addItem = () => {
    localStorage.setItem('hello', JSON.stringify({one: 'test', two: 'thing'}));
    console.log(JSON.parse(localStorage.getItem('hello')));
    if (!outfitItems.some(item => item.name === currentItem.name)) {
      const copy = [...outfitItems];
      const item = { ...currentItem, pictures: photo };
      copy.unshift(item);
      setOutfitItems(copy);
    }
  };

  return (
    <StyledCard width={cardWidth} onClick={addItem}>
      <Title onClick={() => console.log(currentItem)}>Add to Outfit</Title>
      <Plus>+</Plus>
    </StyledCard>
  );
};

export default Add;
