import { Request, Response, NextFunction } from 'express';
import { OfferModel } from '../models/offer.models';
import { sendPartOffer, sendPartOfferNotification } from '../services/mailer.service';

export const createOffer = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newOffer = new OfferModel(req.body);
       
        await newOffer.save();
        res.status(201).json(newOffer);

        // Send an email to byer
        await sendPartOffer(req.body.byer_email, req.body.part_name, req.body);

        // Send email notification to salesman
        await sendPartOfferNotification(req.body.email, req.body.part_name, req.body);
    } catch (error) {
        next(error);
    }
};
