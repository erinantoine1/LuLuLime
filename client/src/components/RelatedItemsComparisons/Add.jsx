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
  const [style, setStyle] = useState({});
  const [currentAddItem, setCurrentAddItem] = useState(0);

  useEffect(() => {
    axios.get('/currentItem', { params: { product_id: currentID } })
      .then(res => {
        setCurrentItem({ ...currentItem, name: res.data.name, category: res.data.category, default_price: res.data.default_price });
      })
      .catch(err => console.error(err));

    axios.get('/currentItem/styles', { params: { product_id: currentID } })
      .then(res => {
        const temp = {};
        for (let i = 0; i < res.data.results.length; i++) {
          if (res.data.results[i]['default?']) {
            temp.sale_price = res.data.results[i].sale_price;
            temp.photo = res.data.results[i].photos[0].url;
          }
        }
        if (temp.photo === null || temp.photo === undefined) {
          temp.photo = 'https://greenvilleidc.com/img/placeholder.jpeg';
        }
        setStyle({ pictures: temp.photo, sale_price: temp.sale_price });
      })
      .catch(err => console.error(err));

    // Promise.all([axios.get('/currentItem', { params: { product_id: currentID } }), axios.get('/currentItem/styles', { params: { product_id: currentID } })])
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch();

  }, [currentID]);


  const addItem = () => {
    if (!outfitItems.some(item => item.name === currentItem.name)) {
      const copy = [...outfitItems];
      const item = { ...currentItem, ...style };
      copy.unshift(item);
      localStorage.setItem('yourOutfit', JSON.stringify(copy));
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
