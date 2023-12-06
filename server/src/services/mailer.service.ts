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
  try {
    const info = await transporter.sendMail({
      from: 'MyNextParts <info@mynextparts.com>',
      to,
      subject,
      text,
      html,
    });

    console.log('Email sent successfully');
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};



export const sendPartOffer = async (to: string, offerPart: string, offerData: object) => {
  const html = templater.render("./mails/partOffer", { 
      offerPart,
      offerData,
      url: 'http://localhost:3030/',
      email: to
  });
  
  const subject = `You got a new part offer!`;
  await SendMail(to, subject, "", html);
}