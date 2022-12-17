# Project Atelier

## Introduction
Hack Reactor Cohort - RFP2210

### Description

Project Atelier is an e-commerce concept website, a demonstration of ability and style. 
	
### Technologies Used

This application is written in JavaScript, HTML and CSS, and uses:
* React, Axios, and Styled Components in the front end
* Express with middleware as a proxy backend server to enhance security
* Webpack and Babel to bundle and transcompile our project to be run in the browser

## Overview

The overview section contains basic information about the current item (ie. category, title, rating, description, and price).

![Overview Screen Capture](https://user-images.githubusercontent.com/93167286/208269811-822f6036-62bc-4821-9951-ee9b5a4a46ec.gif)


* Users may select a style thumbnail to change the style/color of the current item.
* The image gallery on the left will also change to match the selected style. 
* Users may toggle through images using the arrows or by clicking on the thumnails below.  
* Once both a size and quantity are selected, an item can be added to the cart successfully.

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

![Review-List-Functionality](https://user-images.githubusercontent.com/93167286/208269618-a7daf6eb-5b7a-44d9-981c-023b761140c3.gif)


- Users are able to rate reviews as helpful once per user as well as report inappropriate reviews.
- Extends the ability to write and submit a review with client side data validation to prevent faulty reviews.


![Submitting-Review](https://user-images.githubusercontent.com/93167286/208269524-52ee83c4-0392-4721-bbdd-ee39f086160d.gif)


## Installation

1. Install packages using the following command

	`npm install`
	
2. Compile the project using webpack 

	`npm run build`
	
3. Start the server

	`npm start`

4. Rename example.config.js to config.js

	`example.config.js -> config.js`

6. Replace example token with github personal access token

	`TOKEN = 'PUT TOKEN HERE'`
	
7. Open project in web browser at 

	`http://localhost:3000`



## Team
* **Erin Antoine - Overview**
	* https://github.com/erinantoine1
	* https://www.linkedin.com/in/erin-antoine/


* **Justin Chong - Related Items & Outfits**
	* https://github.com/justinjchong
	* https://www.linkedin.com/in/justin-chong-169bb5118/


* **Max Peterson - Questions & Answers**
	* https://github.com/maxpeterson96
	* https://www.linkedin.com/in/max-peterson-10b368b3/


* **Chris Garcia - Ratings & Reviews**
	* https://github.com/cegarcia96
	* https://www.linkedin.com/in/christopher-garcia-609442193/
