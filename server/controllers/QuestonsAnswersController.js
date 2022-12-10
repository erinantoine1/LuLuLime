const axios = require('axios');
const config = require('../../config.js');

module.exports = {
  getQuestions: (req, res) => {
    const { query: { product_id } } = req;
    const { query: { page } } = req;
    const { query: { count } } = req;
    console.log(`${config.URL}/qa/questions/?product_id=${product_id}&page=${page}&count=${count}`);
    axios({
      url: `${config.URL}/qa/questions/?product_id=${product_id}&page=${page}&count=${count}`,
      method: 'get',
      headers: {
        Authorization: config.TOKEN
      }
    })
      .then((response) => {
        res.status(200).send(response.data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  },
  getAnswers: (req, res) => {
    const { query: { question_id } } = req;
    const { query: { page } } = req;
    const { query: { count } } = req;
    axios({
      url: `${config.URL}/qa/questions/${question_id}/answers?&page=${page}&count=${count}`,
      method: 'get',
      headers: {
        Authorization: config.TOKEN
      }
    })
      .then((response) => {
        res.status(200).send(response.data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  },
  postQuestion: (req, res) => {
    console.log(req.body);
    axios({
      url: `${config.URL}/qa/questions`,
      method: 'post',
      data: req.body,
      headers: {
        Authorization: config.TOKEN
      }
    })
      .then((response) => {
        res.status(201).send();
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  },
  postAnswer: (req, res) => {
    const { body: { question_id } } = req;
    axios({
      url: `${config.URL}/qa/questions/${question_id}/answers`,
      method: 'post',
      data: req.body,
      headers: {
        Authorization: config.TOKEN
      }
    })
      .then((response) => {
        res.status(201).send();
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send(error);
      });
  },
  setQuestionHelpful: (req, res) => {
    const { body: { question_id } } = req;
    axios({
      url: `${config.URL}/qa/questions/${question_id}/helpful`,
      method: 'put',
      headers: {
        Authorization: config.TOKEN
      }
    })
      .then((response) => {
        res.status(204).send();
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  },
  reportQuestion: (req, res) => {
    const { body: { question_id } } = req;
    axios({
      url: `${config.URL}/qa/questions/${question_id}/report`,
      method: 'put',
      headers: {
        Authorization: config.TOKEN
      }
    })
      .then((response) => {
        res.status(204).send();
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  },
  setAnswerHelpful: (req, res) => {
    const { body: { answer_id } } = req;
    console.log(`${config.URL}/qa/answers/${answer_id}/helpful`);
    axios({
      url: `${config.URL}/qa/answers/${answer_id}/helpful`,
      method: 'put',
      headers: {
        Authorization: config.TOKEN
      }
    })
      .then((response) => {
        res.status(204).send();
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  },
  reportAnswer: (req, res) => {
    const { body: { answer_id } } = req;
    axios({
      url: `${config.URL}/qa/questions/${answer_id}/report`,
      method: 'put',
      headers: {
        Authorization: config.TOKEN
      }
    })
      .then((response) => {
        res.status(204).send();
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  }
};
