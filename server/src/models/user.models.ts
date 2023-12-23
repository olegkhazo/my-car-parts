import { prop, getModelForClass } from "@typegoose/typegoose";

export class Users {
  @prop()
  userEmail: string;

  @prop()
  password: string;

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