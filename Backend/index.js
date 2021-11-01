var express = require('express');
var router = express.Router();

/*GET home page. */
router.get('/', function(req, res, next){
    if(req.ip !== "::1"){
        res.status(401);
        return res.send("Permission denied");
    }
    res.render("index", {title: "Express"});
});

module.exports = router;