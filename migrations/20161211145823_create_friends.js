
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('friends', function(t) {
      t.increments('id').primary();
      t.integer('friend_id').references('id').inTable('users')
      t.integer('my_id').references('id').inTable('users')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('friends')
  ])
};
