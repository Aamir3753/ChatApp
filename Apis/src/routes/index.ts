import { Router } from "express";
import roomsRoutes from "./rooms.route";
import Paths from "@src/constants/Paths";

const router = Router();

router.use(Paths.Rooms.Base, roomsRoutes);

export default router;
