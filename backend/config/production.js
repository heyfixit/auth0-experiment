const productionDBConnection = process.env.DATABASE_URL || {
  host: 'localhost',
  database: 'trivializer',
  user: 'test@example.com',
  password: 'password'
};

module.exports = {
  knex: {
    client: 'pg',
    connection: productionDBConnection
  }
};

