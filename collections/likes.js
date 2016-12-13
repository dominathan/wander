var Bookshelf = require('../config/bookshelf.config');
var Like = require('../models/like')

var Likes = Bookshelf.Collection.extend({
  model: Like
});

module.exports = Likes
