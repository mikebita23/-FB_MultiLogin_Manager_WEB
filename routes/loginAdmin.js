var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log(__dirname);
    res.sendFile('loginAdmin.html', { root: __views})
});


module.exports = router;