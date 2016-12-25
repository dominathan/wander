var express = require('express');
var router = express.Router();
var authConfig = require('../config/facebook.config');
var request = require('request');
var jwt = require('jwt-simple')
var moment = require('moment');
// var FacebookTokenStrategy = require('passport-facebook-token');
var Users = require('../collections/users');
var User = require('../models/user');
var qs = require('querystring')
var createToken = require('../helpers/ensure_authenticated').createToken;

router.route('/auth/facebook/callback')
  .post(function(req, res, next) {
    // console.log("REDIRECT: ", authConfig.facebookAuth.callbackUrl)
    // var accessTokenUrl = 'https://graph.facebook.com/oauth/access_token';
    var graphApiUrl = 'https://graph.facebook.com/me';
    var accessToken = req.body.accessToken
    console.log("THIS IS ACCESS TOKEN", accessToken)

    // // Step 1. Exchange authorization code for access token.
    // request.get({ url: accessTokenUrl, qs: params, json: true }, function(err, response, accessToken) {
    //   if (response.statusCode !== 200) {
    //     return res.status(500).send({ message: accessToken.error.message });
    //   }
    //   accessToken = qs.parse(accessToken);
    //   // Step 2. Retrieve profile information about the current user.
      request.get({ url: graphApiUrl, qs: accessToken, json: true }, function(err, response, profile) {
        if (response.statusCode !== 200) return res.status(500).send({ message: profile.error.message });

        console.log('PROFILE INFO', profile);
        User.forge({
          facebook_uuid: profile.id,
        })
        .fetch()
        .then(function(user) {
          if(user) {
            console.log("user exists", user)
            user.save({facebook_authentication_token: accessToken['access_token']})
            res.send({ token: createToken(user), profile: profile})
          } else {
            User.forge({
              first_name: profile.name.split(' ')[0],
              last_name: profile.name.split(' ')[1],
              facebook_authentication_token: accessToken['access_token'],
              facebook_uuid: profile.id
            })
            .save()
            .then(function(data) {
              console.log("creating user", data)
              res.send({ token: createToken(user)} )
            })
          }
        })
        .catch(function(err) {
          console.log("FAILED TO SAVE USER", err)
          next(err)
        })

      });
    // });
  });


module.exports = router
