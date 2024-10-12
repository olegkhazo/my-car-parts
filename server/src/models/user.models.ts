import { prop, getModelForClass } from "@typegoose/typegoose";

export class Users {
  @prop()
  first_name: string;

  @prop() 
  last_name: string;

  @prop() 
  company: string;

  @prop() 
  email: string;

  @prop() 
  password: string;

  @prop()
  phone?: string;

  @prop()
  address?: string;

  @prop({ default: "" })
  avatar?: string;

  @prop() 
  tips_agreement: string;

  @prop() 
  terms_agreement: string;

  @prop({ default: false })
  isActive: boolean;

  @prop() 
  activationToken: string;

  // different user types (user, seller, super_admin)
  @prop({ default: 'user' }) // Default to 'user' role
  role: string;
}

export const UsersModel = getModelForClass(Users);
