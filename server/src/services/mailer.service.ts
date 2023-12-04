import nodemailer from 'nodemailer';
import { Eta } from "eta";
import path from 'path';

const transporter = nodemailer.createTransport({
  host: 'mynextparts.com',
  port: 465,
  secure: true,
  auth: {
    user: 'info@mynextparts.com',
    pass: 'Applemak1234$$$',
  },
});

const templatePath = path.join(__dirname, "../../templates");
const templater = new Eta({ views: templatePath })

export const SendMail = async (to: string, subject: string, text: string, html: string) => {
  const info = await transporter.sendMail({
    from: 'info@mynextparts.com', //will take it from .env file in future
    to,
    subject,
    text,
    html,
  });

  // console.log("Message sent: %s", info.messageId, info);
  try {
    await transporter.sendMail(info);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};



export const sendPartOffer = async (to: string, offerPart: string, offerData: object) => {
  const html = templater.render("./mails/partOffer", { 
      offerPart,
      offerData,
      // preheader: "Yo got a new offer",
      url: 'http://localhost:3030/',
      email: to
  });
  
  const subject = `New offer on 'MyNextParts' for ${offerPart}`;
  await SendMail(to, subject, "", html);
}