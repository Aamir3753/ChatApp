export default {
  NodeEnv: process.env.NODE_ENV ?? "",
  Port: process.env.PORT ?? 0,
  Db: {
    connectionString: process.env.DB_CONNECTION_STRING ?? "",
    dbName: process.env.DB_NAME ?? "",
  },
  Jwt: {
    Secret: process.env.JWT_SECRET ?? "",
  },
} as const;
