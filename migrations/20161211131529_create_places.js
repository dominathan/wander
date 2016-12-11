
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('places', function(table) {
      table.increments('id').primary();
      table.string('place_name')
      table.float('x_coord').notNullable()
      table.float('y_coord').notNullable()
      table.string('google_id').notNullable()
      table.integer('user_id').references('id').inTable('users').notNullable();
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('places')
  ])
};
