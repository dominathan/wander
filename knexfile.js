module.exports = {
  development: {
    client: 'postgresql',
    debug: true,
    connection: {
      database: 'wander_development'
    },
    pool: {
      min: 0,
      max: 16
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'wander_staging',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
