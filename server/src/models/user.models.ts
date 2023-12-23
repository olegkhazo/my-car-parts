import { prop, getModelForClass } from "@typegoose/typegoose";

export class User {
    @prop({ required: true })
    public username!: string;
  
    @prop({ required: true })
    public password!: string;
  
    @prop({ default: false })
    public isActive?: boolean;
  
    @prop()
    public activationToken?: string;
  }

export const UserModel = getModelForClass(User);