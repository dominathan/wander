var Bookshelf = require('../config/bookshelf.config');

var Likes = Bookshelf.Collection.extend({
  model: Like
});
