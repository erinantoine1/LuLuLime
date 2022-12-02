import React from 'react';
import * as styling from './Styling.js';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';
import ReviewTile from './ReviewTile.jsx';

const RatingsReviews = () => {

  const testProduct = {
    product: '2',
    page: 0,
    count: 5,
    results: [
      {
        review_id: 5,
        rating: 3,
        summary: 'I"m enjoying wearing these shades',
        recommend: false,
        response: null,
        body: 'Comfortable and practical.',
        date: '2019-04-14T00:00:00.000Z',
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
        recommend: false,
        response: 'Glad you"re enjoying the product!',
        body: 'They are very dark. But that"s good because I"m in very sunny spots',
        date: '2019-06-23T00:00:00.000Z',
        reviewer_name: 'bigbrotherbenjamin',
        helpfulness: 5,
        photos: [],
      },
    ],
  };

  return (
    <styling.ReviewListDiv>
      <styling.ReviewListHeader>
        <h3>Review List</h3>
        <label htmlFor="sort">
          Sort-On:
          <select name="sort" id="sort">
            <option value="Helpful">Helpful</option>
            <option value="Newest">Newest</option>
            <option value="Relevant">Relevant</option>
          </select>
        </label>
      </styling.ReviewListHeader>
      <styling.ReviewListBody>
        <RatingBreakdown />
        <styling.ReviewTilesContainer>
          <ReviewTile />
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

