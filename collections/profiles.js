var Bookshelf = require('../config/bookshelf.config');
var Profile = require('../models/profile')

var Profiles = Bookshelf.Collection.extend({
  model: Profile
});

module.exports = Profiles
