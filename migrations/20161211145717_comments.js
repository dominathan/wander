
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('comments', function(t) {
      t.increments('id').primary();
      t.text('comment_text')
      t.integer('user_id').references('id').inTable('users')
      t.integer('place_id').references('id').inTable('places')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('comments')
  ])
};
