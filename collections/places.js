var Bookshelf = require('../config/bookshelf.config');

var Places = Bookshelf.Collection.extend({
  model: Place
});
