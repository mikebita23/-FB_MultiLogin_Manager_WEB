var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');


/* GET users listing. */
router.post('/', function(req, res, next) {
    const adminPass = req.body.adminPassword;
    const adminUsername = req.body.adminUsername;
    if (!adminPass  && !adminUsername ){
        res.send("-------------");
    } else if ((adminPass === "admin" && adminUsername === "admin@admin.com")){
        res.sendFile('admin.html', { root: __views})
    } else {
        // res.send("renseigné un/les champs");
        // console.log(res);
        // res.sendFile('loginAdmin.html', { root: __views})
        req.flash("error", err.message);
        return res.render("register");
    }
});


module.exports = router;
