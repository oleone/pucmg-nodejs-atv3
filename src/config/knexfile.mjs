export default {
  development: {
    client: 'pg',
    debug: true,
    connection: 'postgres://dbuser:dbpass@127.0.0.1:5432/dwallet',
    migrations: {
      directory: '../migrations',
      tableName: 'db_migrations',
      loadExtensions: ['.mjs', '.js']
    }
  },
  production: {
    client: 'pg',
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false }
    },
    migrations: {
      directory: '../migrations',
      tableName: 'db_migrations',
      loadExtensions: ['.mjs', '.js']
    }
  }
};
