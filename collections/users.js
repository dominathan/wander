var Bookshelf = require('../config/bookshelf.config');

var Users = Bookshelf.Collection.extend({
  model: User
});
