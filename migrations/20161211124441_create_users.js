exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function(table) {
      table.increments('id').primary();
      table.string('email').unique()
      table.string('first_name')
      table.string('last_name')
      table.integer('sign_in_count')
      table.timestamp('last_login')
      table.string('facebook_uuid').unique()
      table.boolean('is_expert').default(false)
      table.string('facebook_authentication_token')
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
  ])
};

exports.down = function(knex, Promise) {
 return Promise.all([
    knex.schema.dropTable('users')
  ])
};
