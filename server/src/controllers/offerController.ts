import { Request, Response, NextFunction } from 'express';
import { OfferModel } from '../models/offer.models';
import { sendEmail } from '../services/email.service';

export const createOffer = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newOffer = new OfferModel(req.body);
       
        await newOffer.save();
        res.status(201).json(newOffer);

        // Send an email to byer
        await sendEmail(`${req.body.byer_email}`, `New offer on 'MyNextParts' for ${req.body.part_name}`,
       `From: ${req.body.full_name} (${req.body.company_name}),
        Related to: ${req.body.part_name}
        Price: ${req.body.price}$
        Type of part: ${req.body.type_of_part}
        Part condition: ${req.body.part_condition}
        City: ${req.body.city_area}
        Email: ${req.body.email}
        Phone: ${req.body.phone}`);
    } catch (error) {
        next(error);
    }
};
