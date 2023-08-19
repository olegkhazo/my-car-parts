import { prop, getModelForClass } from "@typegoose/typegoose";

class Offer {
    @prop()
    related_request_id: string;

    @prop()
    full_name: string;

    @prop()
    company_name: string;

    @prop()
    type_of_part: string;

    @prop()
    part_condition: string;

    @prop()
    city_area: string;

    @prop()
    email: string;

    @prop()
    phone: string;

    @prop({ default: Date.now })
    created_date: Date;
}

export const OfferModel = getModelForClass(Offer);