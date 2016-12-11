var bookshelf = require('../config/bookshelf.config');
var Likes = require('./like')

var Place = bookshelf.Model.extend({
  tableName: 'places',
  likes: function() {
    return this.hasMany(Likes)
  }
});

module.exports = Place;
