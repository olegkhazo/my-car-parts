import { prop, getModelForClass } from '@typegoose/typegoose';

class Part {
  // { required: true } - will need to add for fields is required
  // Also necessary to know what means part_name!: string; and public comment?: string;
  @prop()
  part_name: string;

  @prop()
  part_group: string;

  @prop()
  type_of_part: string;

  @prop()
  part_condition: string;

  @prop()
  part_code: string;

  @prop()
  car_type: string;

  @prop()
  car_make: string;

  @prop()
  car_model: string;

  @prop()
  car_year: string;

  @prop()
  fuel_type: string;

  @prop()
  engine_volume: string;

  @prop()
  car_body: string;

  @prop()
  vin_code: string;

  @prop()
  email: string;

  @prop()
  phone: string;

  @prop()
  name: string;

  @prop()
  city: string;

  @prop()
  comment: string;

  @prop({ default: Date.now })
  created_date: Date;
}

export const PartModel = getModelForClass(Part);
