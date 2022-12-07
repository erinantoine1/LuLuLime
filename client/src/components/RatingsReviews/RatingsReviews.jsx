import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as styling from './Styling.js';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';
import ReviewList from './ReviewList.jsx';


const RatingsReviews = () => {

  const [reviews, setReviews] = useState([]);
  const [filterBy, setFilterBy] = useState([]);
  const [sortOrder, setSortOrder] = useState('relevant');
  const [metaData, setMetaData] = useState({});
  const [reviewsLoaded, setReviewsLoaded] = useState(false);
  const [metaDataLoaded, setMetaDataLoaded] = useState(false);

  const generateReviews = (product_id, sort, count) => {
    const queries = { product_id, sort, count };
    axios.get('/reviews', {
      params: queries
    })
      .then((response) => {
        setReviews(response.data.results);
        setReviewsLoaded(true);
      })
      .catch((error) => console.log(error));
  };

  const handleSort = (value) => {
    generateReviews(40344, value, 1000);
    setSortOrder(value);
  };

  useEffect(() => {
    generateReviews(40344, 'relevant', 1000);
  }, []);

  useEffect(() => {
    axios.get('/reviews/meta', {
      params: {
        product_id: 40344
      }
    })
      .then((response) => {
        setMetaData(response.data);
        setMetaDataLoaded(true);
      })
      .catch((error) => console.log(error));
  }, []);

  if (!reviewsLoaded || !metaDataLoaded) {
    return <div>Loading Reviews</div>;
  }
  return (
    <styling.ReviewSectionContainer>
      <styling.ReviewSectionHeader>
        <h3>Review List</h3>
        <label htmlFor="sort">
          Sort-On:
          <select onChange={(event) => handleSort(event.target.value)} name="sort" id="sort">
            <option value="relevant">Relevant</option>
            <option value="helpful">Helpful</option>
            <option value="newest">Newest</option>
          </select>
        </label>
      </styling.ReviewSectionHeader>
      <styling.ReviewSectionBody>
        <RatingBreakdown filterBy={filterBy} setFilterBy={setFilterBy} />
        <ReviewList
          reviews={filterBy.length === 0 ? reviews : reviews.filter((review) => {
            return filterBy.includes(review.rating);
          })}
          metaData={metaData}
          setReviews={setReviews}
          sortOrder={sortOrder}
        />
      </styling.ReviewSectionBody>
    </styling.ReviewSectionContainer>
  );
};

export default RatingsReviews;

