import "./pre-start"; // Must be the first import
import io from "./server";
import logger from "jet-logger";

import EnvVars from "@src/constants/EnvVars";
import DbConnection from "@Common/configs/db";

const SERVER_START_MSG = "Socket server started on port: " + EnvVars.Port;

// **** Run **** //

(() => {
  io.listen(Number(EnvVars.Port));
  logger.info(SERVER_START_MSG);
  DbConnection({
    connectionString: EnvVars.Db.connectionString,
    dbName: EnvVars.Db.dbName,
  })
    .then(() => logger.info("Database Connected Successfully"))
    .catch((err) => logger.err(err));
})();
