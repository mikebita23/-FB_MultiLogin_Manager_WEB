var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

/* GET users listing. */
router.post('/', function(req, res, next) {
    const adminPass = req.body.adminPassword;
    const adminUsername = req.body.adminUsername;
    if (!adminPass  && !adminUsername ){
        res.send("-------------");
    } else if ((adminPass != "admin") && (adminUsername != "admin@admin.com")){
        res.send("renseigné un/les champs");
    } else {
        res.sendFile('admin.html', { root: __views})
    }
});


module.exports = router;
