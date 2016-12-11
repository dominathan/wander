
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('profiles', function(t) {
      t.increments('id').primary();
      t.integer('user_id').references('id').inTable('users')
      t.text('bio')
      t.string('homepage')
      t.string('profile_img')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('profiles')
  ])
};
