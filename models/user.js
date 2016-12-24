var Bookshelf = require('../config/bookshelf.config');
var Likes = require('./like')
var _ = require('lodash');

var User = Bookshelf.Model.extend({
  tableName: 'users',

  likes: function() {
    return this.hasMany(Likes)
  },

  // create: function(data, options = {}) {
  //   return this.forge(data)
  //     .save(null, options);
  // },
  //
  // findOne: function(data, options = {}) {
  //   return this.forge(data).fetch(options);
  // },
  //
  // findOrCreate: function(data, options = {}) {
  //   let createOpts = _.clone(data);
  //   let findOpts = _.pick(data, 'name', 'id');
  //   console.log("THIS IS DATA: ", JSON.stringify(findOpts))
  //   return this.findOne(findOpts, options)
  //     .then(model => {
  //       return model ? model : this.create(createOpts, options);
  //   });
  // }
});

module.exports = User;
