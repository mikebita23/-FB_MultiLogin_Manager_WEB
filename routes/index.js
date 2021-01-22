var express = require('express');
const path = require('path')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', { root: __views});
});

module.exports = router;
