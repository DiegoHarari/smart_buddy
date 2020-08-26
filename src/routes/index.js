const express = require('express');
const app = express();
const router = express.Router();
const data = require('../data/data.json');
const questions = require('../ava/questions');
const cors = require('cors');

app.use(cors());

router.get('/', async (req, res) => {
  try {
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get('/ava/:question', async (req, res) => {
  console.log(req.params.question);
  const question = req.params.question; //aca recibe la pregunta spliteada
  try {
    console.log(questions.keywords);
    const matches = questions.keywords.filter((w) => question.includes(w));
    console.log(matches);
    if (matches) {
      res.status(200).send(JSON.stringify(matches));
    }
    res.status(200).send(JSON.stringify(question));
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
