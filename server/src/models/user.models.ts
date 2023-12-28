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
  tips_agreement: string;

  @prop()
  terms_agreement: string;

  @prop()
  isActive: boolean;

  @prop()
  activationToken: string;


    // @prop({ required: true })
    // public userEmail!: string;
  
    // @prop({ required: true })
    // public password!: string;
  
    // @prop({ default: false })
    // public isActive?: boolean;
  
    // @prop()
    // public activationToken?: string;
  }

export const UsersModel = getModelForClass(Users);