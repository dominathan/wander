var Bookshelf = require('../config/bookshelf.config');
var Visit = require('../models/visit')

var Visits = Bookshelf.Collection.extend({
  model: Visit
});

module.exports = Visits
