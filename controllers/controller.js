var express = require("express");
const path = require("path");
var router = express.Router();

// main page so I don't always forget what `/` means
router.get(`/`, (req, res) => {
  res.sendFile(path.join(__dirname, `../public/index.html`));
});

router.get(`/exercise?`, (req, res) => {
  res.sendFile(path.join(__dirname, `../public/exercise.html`));
});

router.get(`/stats`, (req, res) => {
  res.sendFile(path.join(__dirname, `../public/stats.html`));
});

module.exports = router;