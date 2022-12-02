import React from 'react';

const ListCard = ({ name, description, price }) => {

  const style = {
    border: '2px solid black',
    borderRadius: '3px',
    padding: '5px',
    display: 'inline-block',
    maxHeight: '400px',
    maxWidth: '400px',
    marginLeft: '10px',
  };

  return (
    <div style={style}>
      <img alt="nice pants" />
      <h2>{name}</h2>
      <h3>{price}</h3>
      <p>{description}</p>
    </div>
  );
};

// RelatedListCard.propTypes = {
//   name: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   price: PropTypes.string.isRequired,
// };

export default ListCard;
