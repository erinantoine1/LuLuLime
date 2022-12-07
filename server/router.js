const router = require('express').Router();
const QAController = require('./controllers/QuestonsAnswersController.js');

module.exports = router;

router.get('/qa/questions', QAController.getQuestions);

router.get('/qa/questions/:question_id/answers', QAController.getAnswers);

router.post('/qa/questionss', QAController.postQuestion);

router.post('/qa/questions/:question_id/answers', QAController.postAnswer);

router.put('/qa/questions/:question_id/helpful', QAController.setQuestionHelpful);

router.put('/qa/questions/:question_id/report', QAController.reportQuestion);

router.put('/qa/answers/:answer_id/helpful', QAController.setAnswerHelpful);

router.put('/qa/answers/:answer_id/report', QAController.reportAnswer);

const reviewControllers = require('./controllers/reviewsControllers.js');

router.get('/reviews', reviewControllers.getReviews);
router.get('/reviews/meta', reviewControllers.getMetaData);
router.post('/reviews', reviewControllers.postReview);
router.put('/reviews/helpful', reviewControllers.updateHelpful);
router.put('/reviews/report', reviewControllers.reportReview);
