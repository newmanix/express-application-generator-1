var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.render('users', {title:'User List', users: data, listExists: true});
});

module.exports = router;
