
module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "cluckr_db",
    },
    migrations: {
      tableName: "migrations",
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
  },
};
