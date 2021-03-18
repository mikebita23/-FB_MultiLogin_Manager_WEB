var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

    res.sendFile('sessionsAdmin.html', { root: __views})
});


module.exports = router;