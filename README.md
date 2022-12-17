# Project Atelier

## Introduction
Hack Reactor Cohort - RFP2210

### Description

Project Atelier is an e-commerce concept website, a demonstration of ability and style. 
	
### Technologies Used

This application is written in JavaScript, HTML and CSS, and uses:
* React, Axios, and Styled Components in the front end
* Express middleware as a proxy backend server
* Webpack and Babel to bundle and transcompile our project to be run in the browser

## Overview

* The overview section contains basic information about the current item (ie. category, title, rating, description, and price).
* Users may select a style thumbnail to change the style/color of the current item. 
	* Depending on what style is chosen, either the original price or sale price will be shown above.
	* The image gallery on the left will also change to match the selected style.
		* Users may toggle through images using the arrows or by clicking on the thumnails below. 
* The size and quantity of the current item may be selected from dropdowns. The item can then be added to the shopping cart by clicking the ‘Add to Cart’ button. 
	* On click, if a size is not chosen, an alert stating ‘Please select a size’ will appear above the ‘Add to Cart’ button. This will automatically open the size dropdown until a size is chosen. 
	* After a size is chosen, the quantity dropdown will become active as well. 
	* Once both a size and quantity are selected, the item can be added to the cart successfully.

## Related Items & Outfits
Related Products displays product cards of similar items that may interest the user. This component includes:

- Data caching to reduce api calls made by 16 per page and decrease rendering time from 3.4 seconds to 0.3 seconds
- A sliding carousel of related product cards
- Product cards that display the name, category, and star rating rounded to the nearest quarter-star
- A popup feature comparison modal
- Conditionally rendered scroll buttons if unable to scroll any further

Your Outfit allows users to save and track individual products based on their interest. This component includes:

- Your Outfit list that persists on the website during a new session
- Add to Outfit card that adds the current product to Your Outfit list
- A delete icon on each Outfit card to remove item from Your Outfit

## Questions & Answers
The Questions and Answers component enables users to ask and respond to questions related to the product they are viewing

* Modules responds quickly and stylishly, empowers users access the information they need in order to confidently make a purchase 
* Provides users the capability to rate and report answers that they found helpful or unpleasant 
* Allows users to promptly search previously asked questions for pertinent information 
	
## Ratings & Reviews
The Ratings and Reviews component dynamically displays user reviews, ratings, and statistics about the selected product.
- Allows filtering, sorting, and keyword searching through a scrollable list of user reviews.
- Users are able to rate reviews as helpful once per user as well as report inappropriate reviews.
- Extends the ability to write and submit a review with client side data validation to prevent faulty reviews.

## Installation

1. Install packages using the following command

	`npm install`
	
2. Compile the project using webpack 

	`npm run build`
	
3. Start the server

	`npm start`

4. Rename example.config.js to config.js
5. Replace example token with github personal access token

	`token = 'put token here'`
	
7. Open project in web browser at 

	`http://localhost:3000`



## Team
Project Lead
* Max Peterson - Questions & Answers
	* https://github.com/maxpeterson96
	* https://www.linkedin.com/in/max-peterson-10b368b3/
