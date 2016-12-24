var dbConfig = require('../knexfile')
var env = process.env.NODE_ENV || 'development';
var knex = require('knex')(dbConfig[env])
var bookshelf = require('bookshelf')(knex);

module.exports = bookshelf
