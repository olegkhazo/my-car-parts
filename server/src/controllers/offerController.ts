import { Request, Response, NextFunction } from 'express';
import { OfferModel } from '../models/offer.models';

export const createOffer = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newOffer = new OfferModel(req.body);
        console.log(newOffer);
        await newOffer.save();
        res.status(201).json(newOffer);

        // Here will be the logic for sending email
    } catch (error) {
        next(error);
    }
};
