import { connect } from "mongoose";

export default async (options: { connectionString: string; dbName: string }) =>
  connect(options.connectionString, {
    dbName: options.dbName,
  });
