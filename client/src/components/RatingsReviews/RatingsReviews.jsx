import React from 'react';
import * as styling from './Styling.js';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';
import ReviewTile from './ReviewTile.jsx';
import sortByRelevance from './Utility.js';

const { useState } = React;

const RatingsReviews = () => {

  const testProduct = {
    product: '2',
    page: 0,
    count: 5,
    results: [
      {
        review_id: 5,
        rating: 3,
        summary: "I'm enjoying wearing these shades",
        recommend: false,
        response: null,
        body: 'Comfortable and practical.',
        date: '2022-06-23T00:00:00.000Z',
        reviewer_name: 'shortandsweeet',
        helpfulness: 5,
        photos: [{
          id: 1,
          url: 'urlplaceholder/review_5_photo_number_1.jpg',
        },
        {
          id: 2,
          url: 'urlplaceholder/review_5_photo_number_2.jpg',
        },
        ],
      },
      {
        review_id: 3,
        rating: 4,
        summary: 'I am liking these glasses',
        recommend: true,
        response: 'Glad you"re enjoying the product!',
        body: 'They are very dark. But that"s good because I"m in very sunny spots',
        date: '2022-04-23T00:00:00.000Z',
        reviewer_name: 'bigbrotherbenjamin',
        helpfulness: 8,
        photos: [],
      },
    ],
  };

  const [results, setResults] = useState(testProduct.results);
  const [sortOrder, setSortOrder] = useState('Relevant');

  const handleSort = (value) => {
    const sortedList = [...results];
    if (value === 'Helpful') {
      setResults(sortedList.sort((a, b) => {
        return a.helpfulness < b.helpfulness ? 1 : -1;
      }));
    } else if (value === 'Newest') {
      setResults(sortedList.sort((a, b) => {
        return new Date(a.date).getTime() < new Date(b.date).getTime() ? 1 : -1;
      }));
    } else {
      setResults(sortedList.sort(sortByRelevance));
    }
    setSortOrder(value);
  };

  return (
    <styling.ReviewListDiv>
      <styling.ReviewListHeader>
        <h3>Review List</h3>
        <label htmlFor="sort">
          Sort-On:
          <select onChange={(event) => handleSort(event.target.value)} name="sort" id="sort">
            <option value="Relevant">Relevant</option>
            <option value="Helpful">Helpful</option>
            <option value="Newest">Newest</option>
          </select>
        </label>
      </styling.ReviewListHeader>
      <styling.ReviewListBody>
        <RatingBreakdown />
        <styling.ReviewTilesContainer>
          {results.map((review) => (
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

