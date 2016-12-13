var Bookshelf = require('../config/bookshelf.config');
var User = require('../models/user')

var Users = Bookshelf.Collection.extend({
  model: User
});

module.exports = Users
