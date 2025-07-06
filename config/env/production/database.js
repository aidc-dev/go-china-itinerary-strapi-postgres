const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  const { host, port, database, user, password } = parse(env("DATABASE_URL"));

  return {
    connection: {
      client: "postgres",
      connection: {
        host,
        port,
        database,
        user,
        password,
      },
      pool: {
        min: env.int("DATABASE_POOL_MIN", 2),
        max: env.int("DATABASE_POOL_MAX", 10),
        acquireTimeoutMillis: env.int("DATABASE_POOL_ACQUIRE_TIMEOUT", 60000),
        createTimeoutMillis: env.int("DATABASE_POOL_CREATE_TIMEOUT", 30000),
        destroyTimeoutMillis: env.int("DATABASE_POOL_DESTROY_TIMEOUT", 5000),
        idleTimeoutMillis: env.int("DATABASE_POOL_IDLE_TIMEOUT", 30000),
        reapIntervalMillis: env.int("DATABASE_POOL_REAP_INTERVAL", 1000),
        createRetryIntervalMillis: env.int(
          "DATABASE_POOL_CREATE_RETRY_INTERVAL",
          200
        ),
      },
      debug: false,
    },
  };
};
