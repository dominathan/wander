var Bookshelf = require('../config/bookshelf.config');
var User = require('./user');
var Place = require('./place');

var Comment = Bookshelf.Model.extend({
  tableName: 'comments',

  user: function() {
    return this.belongsTo(User)
  },

  place: function() {
    return this.belongsTo(Place)
  }
});

module.exports = Comment;
