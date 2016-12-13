var Bookshelf = require('../config/bookshelf.config');
var Place = require('../models/place')

var Places = Bookshelf.Collection.extend({
  model: Place
});

module.exports = Places
