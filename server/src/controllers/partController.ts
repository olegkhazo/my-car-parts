import { Request, Response, NextFunction } from 'express';
import { PartModel } from '../models/part';

export const createPart = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newPart = new PartModel(req.body);
    await newPart.save();
    res.status(201).json(newPart);
  } catch (error) {
    next(error);
  }
};
