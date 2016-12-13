var Bookshelf = require('../config/bookshelf.config');
var Comment = require('../models/comment')

var Comments = Bookshelf.Collection.extend({
  model: Comment
});

module.exports = Comments
