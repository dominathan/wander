var Bookshelf = require('../config/bookshelf.config');
var User = require('./user');
var Place = require('./place');

var Like = Bookshelf.Model.extend({
  tableName: 'likes',

  user: function() {
    return this.belongsTo(User)
  },

  place: function() {
    return this.belongsTo(Place)
  }
});

module.exports = Like;
