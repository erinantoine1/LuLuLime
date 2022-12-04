import React from 'react';
import axios from 'axios';
import * as styling from './Styling.js';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';
import ReviewTile from './ReviewTile.jsx';


const { useState, useEffect } = React;

const RatingsReviews = () => {

  const [results, setResults] = useState([]);
  const [resultsDisplay, setResultsDisplay] = useState([]);
  const [sortOrder, setSortOrder] = useState('Relevant');

  useEffect(() => {
    axios.get('/reviews', {
      params: {
        product_id: 40344,
        sort: 'relevant'
      }
    })
      .then((response) => {
        setResults(response.data.results);
        setResultsDisplay(response.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSort = (value) => {
    axios.get('/reviews', {
      params: {
        product_id: 40344,
        sort: value
      }
    })
      .then((response) => {
        setResults(response.data.results);
        setResultsDisplay(response.data.results);
        setSortOrder(value);
      })
      .catch((error) => console.log(error));
  };

  return (
    <styling.ReviewListDiv>
      <styling.ReviewListHeader>
        <h3>Review List</h3>
        <label htmlFor="sort">
          Sort-On:
          <select onChange={(event) => handleSort(event.target.value)} name="sort" id="sort">
            <option value="relevant">Relevant</option>
            <option value="helpful">Helpful</option>
            <option value="newest">Newest</option>
          </select>
        </label>
      </styling.ReviewListHeader>
      <styling.ReviewListBody>
        <RatingBreakdown />
        <styling.ReviewTilesContainer>
          {resultsDisplay.map((review) => (
            <ReviewTile key={review.review_id} review={review} />
          ))}
        </styling.ReviewTilesContainer>
      </styling.ReviewListBody>
      <styling.ReviewButtonContainer>
        <button type="submit">More Reviews</button>
        <button type="submit">Add Reviews</button>
      </styling.ReviewButtonContainer>
    </styling.ReviewListDiv>
  );
};

export default RatingsReviews;

