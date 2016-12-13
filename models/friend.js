var Bookshelf = require('../config/bookshelf.config');
var User = require('./user');

var Friend = Bookshelf.Model.extend({
  tableName: 'friends',

  user: function() {
    return this.belongsTo(User)
  },


});

module.exports = Friend;
