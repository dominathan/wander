var repl = require('repl');
var env = process.env.NODE_ENV || 'development';
var db = require("./knexfile");
var knex = require('knex')(db[env]);
var Bookshelf = require('./config/bookshelf.config')

// Models
var User = require('./models/user')
var Like = require('./models/like')
var Place = require('./models/place')
var Comment = require('./models/comment')
var Visit = require('./models/visit')
var Friend = require('./models/friend')
var Profile = require('./models/profile')

// Collections
var Users = require('./collections/users')
var Likes = require('./collections/likes')
var Places = require('./collections/places')
var Comments = require('./collections/comments')
var Visits = require('./collections/visits')
var Friends = require('./collections/friends')
var Profiles = require('./collections/profiles')


var replServer = repl.start({
  prompt: 'Wander :> '
});

replServer.context.Bookshelf = Bookshelf;

//Models
replServer.context.User = User;
replServer.context.Like = Like;
replServer.context.Place = Place;
replServer.context.Comment = Comment;
replServer.context.Visit = Visit;
replServer.context.Friend = Friend;
replServer.context.Profile = Profile;

//collections
replServer.context.Users = Users;
replServer.context.Likes = Likes;
replServer.context.Places = Places;
replServer.context.Comments = Comments;
replServer.context.Visits = Visits;
replServer.context.Friends = Friends;
replServer.context.Profiles = Profiles;
