import { Request, Response, NextFunction } from 'express';
import { PartRequestModel } from '../models/partRequest.models';
import { sendPartRequestDetails } from '../services/mailer.service';


export const createPart = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newPart = new PartRequestModel(req.body);
    await newPart.save();
    res.status(201).json(newPart);

    await sendPartRequestDetails(req.body.email, req.body.part_name, req.body);
  } catch (error) {
    next(error);
  }
};

export const getAllParts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const parts = await PartRequestModel.find();
    res.status(200).json(parts);
  } catch (error) {
    next(error);
  }
};

export const getSinglePart = async (req: Request, res: Response, next: NextFunction) => {
  const requestId = req.params.id;

  try {
    const part = await PartRequestModel.findById(requestId);
    res.status(200).json(part);
  } catch (error) {
    next(error);
  }
}

export const getRequestsByUser = async (req: Request, res: Response, next: NextFunction) => {
  const userId = req.params.id;
  
  try {
    const parts = await PartRequestModel.find({ user_id: userId });
    
    if (!parts.length) {
      return res.status(404).json({ message: 'No parts found for this user' });
    }

    res.status(200).json(parts);
  } catch (error) {
    next(error);
  }
};

export const deleteRequest = async (req: Request, res: Response, next: NextFunction) => {
  const requestId = req.params.id;

  try {
    const deletedRequest = await PartRequestModel.findByIdAndDelete(requestId);

    if (!deletedRequest) {
      return res.status(404).json({ message: 'Request not found' });
    }

    res.status(200).json({ message: 'Request deleted successfully' });
  } catch (error) {
    next(error);
  }
};
