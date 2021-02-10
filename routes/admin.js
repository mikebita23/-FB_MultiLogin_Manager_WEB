var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

/* GET users listing. */
router.post('/', function(req, res, next) {
    res.sendFile('admin.html', { root: __views})
});


module.exports = router;
