const express = require("express");
const app = express();
const router = express.Router();
const data = require("../data/data.json");
const keywords = require("../ava/questions");
const cors = require("cors");

app.use(cors());
router.get("/", async (req, res) => {
  try {
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/ava/:question", async (req, res) => {
  const question = req.params.question.split(" "); //aca recibe la pregunta spliteada
  try {
    res.status(200).send(JSON.parse(question));
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
