
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('likes', function(t) {
      t.integer('likes_count').notNullable()
      t.integer('user_id').references('id').inTable('users')
      t.integer('place_id').references('id').inTable('places')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('likes')
  ])
};
