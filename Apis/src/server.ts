import morgan from "morgan";
import helmet from "helmet";
import express from "express";

import "express-async-errors";
import EnvVars from "@src/constants/EnvVars";
import { NodeEnvs } from "@src/constants/misc";
import routes from "./routes";

// **** Variables **** //

const app = express();

// **** Setup **** //

// Basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

if (EnvVars.NodeEnv === NodeEnvs.Dev.valueOf()) app.use(morgan("dev"));

// Security
if (EnvVars.NodeEnv === NodeEnvs.Production.valueOf()) app.use(helmet());

export default app;
