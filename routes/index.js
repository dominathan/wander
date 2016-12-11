var express = require('express');
var router = express.Router();
var app = require('../app');
var User = require('../models/user')

User.fetchAll()
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
