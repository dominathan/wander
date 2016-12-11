var Bookshelf = require('../config/bookshelf.config');
var Likes = require('./like')
var User = Bookshelf.Model.extend({
  tableName: 'users',

  likes: function() {
    return this.hasMany(Likes)
  }
});

module.exports = User;
