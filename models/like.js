var bookshelf = require('../config/bookshelf.config');
var User = require('./user');
var Place = require('./place');

var Like = bookshelf.Model.extend({
  tableName: 'likes',

  user: function() {
    return this.belongsTo(User)
  },

  place: function() {
    return this.belongsTo(Place)
  }
});

module.exports = Like;
