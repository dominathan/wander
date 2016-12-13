var Bookshelf = require('../config/bookshelf.config');
var User = require('./user');

var Profile = Bookshelf.Model.extend({
  tableName: 'profiles',

  user: function() {
    return this.belongsTo(User)
  },


});

module.exports = Profile;
