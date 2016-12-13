var express = require('express');
var router = express.Router();
var request = require('request');
var moment = require('moment');
var jwt = require('jwt-simple');
var config = require('../config/config');
var bcrypt = require('bcrypt');
var ensureAuthenticated = require('../helpers/ensure_authenticated').ensureAuthenticated;

// http://passportjs.org/docs#facebook

router.route('/login').post(function(req, res, next) {
  // knex('users').select('*').where('email', req.body.email).then(function(data) {
  //   if (!data[0]) {
  //     return res.status(401).send({
  //       error: "Incorrect email/or password"
  //     });
  //   }
  //   bcrypt.compare(req.body.password, data[0].password, function(err, isMatch) {
  //     if (!isMatch) {
  //       return res.status(401).send({
  //         error: "Incorrect email/or password"
  //       });
  //     }
  //     var payload = {
  //       email: data[0].email,
  //       username: data[0].username,
  //       id: data[0].id
  //     }
  //     res.send({
  //       token: createToken(payload),
  //       username: data[0].username
  //     })
  //   })
  // })
});
