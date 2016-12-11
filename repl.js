var repl = require('repl');
var env = process.env.NODE_ENV || 'development';
var db = require("./knexfile");
var knex = require('knex')(db[env]);
var Bookshelf = require('./config/bookshelf.config')

var User = require('./models/user')
var Like = require('./models/like')
var Place = require('./models/place')

var replServer = repl.start({
  prompt: 'Wander :> '
});

replServer.context.Bookshelf = Bookshelf;
replServer.context.User = User;
replServer.context.Like = Like;
replServer.context.Place = Place;
