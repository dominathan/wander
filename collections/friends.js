var Bookshelf = require('../config/bookshelf.config');
var Friend = require('../models/friend');

var Friends = Bookshelf.Collection.extend({
  model: Friend
});

module.exports = Friends
