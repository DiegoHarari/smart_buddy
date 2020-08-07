const express = require("express");
const app = express();
const router = express.Router();
const data = require("../../data/data.json");
const cors = require("cors");

app.use(cors());
router.get("/home", async (req, res) => {
  try {
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
