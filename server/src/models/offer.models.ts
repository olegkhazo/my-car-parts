import { prop, getModelForClass } from "@typegoose/typegoose";

class Offer {
    @prop()
    part_name: string;

    @prop()
    byer_email: string;
   
    @prop()
    related_request_id: string;

    @prop() 
    seller_id: string;

    @prop()
    full_name: string;

    @prop()
    company_name: string;

    @prop()
    type_of_part: string;

    @prop()
    part_condition: string;

    @prop()
    price: number;

    @prop()
    state: string;

    @prop()
    car_make: string;
  
    @prop()
    car_model: string;
  
    @prop()
    car_year: string;

    @prop()
    city_area: string;

    @prop()
    email: string;

    @prop()
    phone: string;

    @prop({ default: () => Date.now() })
    created_date: Date;
}

export const OfferModel = getModelForClass(Offer);