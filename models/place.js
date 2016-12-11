var Bookshelf = require('../config/bookshelf.config');
var Likes = require('./like')

var Place = Bookshelf.Model.extend({
  tableName: 'places',
  likes: function() {
    return this.hasMany(Likes)
  }
});

module.exports = Place;
