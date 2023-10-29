import Rooms from "@src/services/Rooms";
import { Request, Response } from "express";

const rooms = new Rooms();

export const getUserRooms = (req: Request, res: Response) => {
  try {
    const { userId } = req.query;
    rooms.getUserRooms(String(userId));
  } catch (err) {}
};
