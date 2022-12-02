import React, { useState } from 'react';
import ListCard from './ListCard.jsx';

const List = () => {

  const [itemList, setItemList] = useState([{ name: 'Neon Green Pants', description: 'very comfy pants', price: '$170' }, { name: 'shirt', price: '$90', description: 'loose shirt' }]);

  return (
    <div>
      {itemList.map((item) => {
        return <ListCard name={item.name} price={item.price} description={item.description} key={`${item.name}_${item.price}`} />;
      })}
    </div>
  );
};

export default List;
