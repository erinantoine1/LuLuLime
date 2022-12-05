import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as styling from './Styling.js';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';
import ReviewTile from './ReviewTile.jsx';

const RatingsReviews = () => {

  const [results, setResults] = useState([]);
  const [sortOrder, setSortOrder] = useState('relevant');
  const [filterBy, setFilterBy] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [displayedReviews, setDisplayedReviews] = useState(2);

  useEffect(() => {
    axios.get('/reviews', {
      params: {
        product_id: 40344,
        sort: 'relevant'
      }
    })
      .then((response) => {
        setResults(response.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    setFilteredResults(results.filter((review) => {
      return filterBy.includes(review.rating);
    }));
  }, [filterBy, sortOrder]);

  const handleSort = (value) => {
    axios.get('/reviews', {
      params: {
        product_id: 40344,
        sort: value
      }
    })
      .then((response) => {
        setResults(response.data.results);
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
        <RatingBreakdown filterBy={filterBy} setFilterBy={setFilterBy} />
        <styling.ReviewTilesContainer>
          {filterBy.length === 0 ? results.slice(0, displayedReviews).map((review) => (
            <ReviewTile key={review.review_id} review={review} />
          )) : filteredResults.slice(0, displayedReviews).map((review) => (
            <ReviewTile key={review.review_id} review={review} />
          ))}
        </styling.ReviewTilesContainer>
      </styling.ReviewListBody>
      <styling.ReviewButtonContainer>
        {filteredResults.length === 0 && results.length > displayedReviews ? <button type="submit" onClick={() => setDisplayedReviews(displayedReviews + 2)}>More Reviews</button> : null}
        {filteredResults.length > 2 && filteredResults.length > displayedReviews ? <button type="submit" onClick={() => setDisplayedReviews(displayedReviews + 2)}>More Reviews</button> : null}
        <button type="submit">Add Reviews</button>
      </styling.ReviewButtonContainer>
    </styling.ReviewListDiv>
  );
};

export default RatingsReviews;

