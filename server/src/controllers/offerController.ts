import { Request, Response, NextFunction } from 'express';
import { OfferModel } from '../models/offer.models';
import { sendEmail } from '../services/email.service';

export const createOffer = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newOffer = new OfferModel(req.body);
       
        await newOffer.save();
        res.status(201).json(newOffer);

        // Send an email using the sendEmail function
        await sendEmail('olegkhazo@gmail.com', 'New Offer Created', 'An offer has been created.');
    } catch (error) {
        next(error);
    }
};
