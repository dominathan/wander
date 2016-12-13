var Bookshelf = require('../config/bookshelf.config');
var User = require('./user');

var Visit = Bookshelf.Model.extend({
  tableName: 'visits',

  user: function() {
    return this.belongsTo(User)
  },


});

module.exports = Visit;
