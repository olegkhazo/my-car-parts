import { Request, Response, NextFunction } from 'express';
import { PartModel } from '../models/part.models';

export const createPart = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newPart = new PartModel(req.body);
    console.log(newPart);
    await newPart.save();
    res.status(201).json(newPart);
  } catch (error) {
    next(error);
  }
};

export const getAllParts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const parts = await PartModel.find();
    res.status(200).json(parts);
  } catch (error) {
    next(error);
  }
};

export const getSinglePart = async (req: Request, res: Response, next: NextFunction) => {
  const requestId = req.params.id;

  try {
    const part = await PartModel.findById(requestId);
    res.status(200).json(part);
  } catch (error) {
    next(error);
  }
}
