const router = require('express').Router();
const axios = require('axios');
const config = require('../config.js');

const QAController = require('./controllers/QuestonsAnswersController.js');

router.get('/questions', QAController.getQuestions);
router.get('/answers', QAController.getAnswers);
router.post('/questions', QAController.postQuestion);
router.post('/answers', QAController.postAnswer);
router.put('/question/helpful', QAController.setQuestionHelpful);
router.put('/question/report', QAController.reportQuestion);
router.put('/answer/helpful', QAController.setAnswerHelpful);
router.put('/answer/report', QAController.reportAnswer);



const reviewControllers = require('./controllers/reviewsControllers.js');

router.get('/reviews', reviewControllers.getReviews);
router.get('/reviews/meta', reviewControllers.getMetaData);
router.post('/reviews', reviewControllers.postReview);
router.put('/reviews/helpful', reviewControllers.updateHelpful);
router.put('/reviews/report', reviewControllers.reportReview);



const OverviewController = require('./controllers/OverviewControllers');

router.get('/products', OverviewController.getAllProducts);
router.get('/products/styles', OverviewController.getAllProductStyles);
router.get('/cart', OverviewController.getCartItems);
router.post('/cart', OverviewController.addCartItem);



const relatedController = require('./controllers/relatedController.js');

router.get('/currentItem', relatedController.getCurrentItem);
router.get('/currentItem/styles', relatedController.getCurrentStyles);
router.get('/currentItem/related', relatedController.getRelatedItems);

router.get('/firstItem', (req, res) => {
  axios.get(`${config.URL}/products/`, { headers: { Authorization: config.TOKEN } })
    .then(item => res.status(200).send(item.data))
    .catch(err => res.status(404).send());
});


module.exports = router;
