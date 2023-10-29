import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";

export const parameterValidator =
  (place: string, validator: ObjectSchema) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (err) {}
  };
