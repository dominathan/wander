
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('visits', function(t) {
      t.increments('id').primary();
      t.boolean('visited').notNullable()
      t.integer('user_id').references('id').inTable('users')
      t.integer('place_id').references('id').inTable('places')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('visits')
  ])
};
