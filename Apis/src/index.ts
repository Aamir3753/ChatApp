import "./pre-start"; // Must be the first import
import logger from "jet-logger";

import EnvVars from "@src/constants/EnvVars";
import server from "./server";

import DbConnection from "@Common/configs/db";

// **** Run **** //

server.listen(EnvVars.Port, () => {
  const SERVER_START_MSG =
    "Express server started on port: " + EnvVars.Port.toString();
  logger.info(SERVER_START_MSG);
  DbConnection({
    connectionString: EnvVars.Db.connectionString,
    dbName: EnvVars.Db.dbName,
  })
    .then(() => logger.info("Database Connected Successfully"))
    .catch((err) => logger.err(err));
});
