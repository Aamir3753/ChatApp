import { Router } from "express";
import Paths from "@src/constants/Paths";
import * as roomsController from "@src/controllers/rooms.contoller";
import { jwtAuthentication } from "@src/middlewares/authentication";
import { parameterValidator } from "@src/middlewares/requestValidator";
import * as schemaValidations from "@src/helpers/schemaValidations";
const router = Router();

router.get(
  Paths.Rooms.getUserRooms,
  jwtAuthentication,
  parameterValidator("query", schemaValidations.getUserRooms),
  roomsController.getUserRooms
);

export default router;
