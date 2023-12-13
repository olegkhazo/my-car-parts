import nodemailer from 'nodemailer';
import { Eta } from "eta";
import path from 'path';

const host = process.env.MAIL_HOST;
const port: number = parseInt(process.env.MAIL_PORT as string, 10);
const user = process.env.MAIL_USER;
const pass = process.env.MAIL_PASSWORD;
const from = process.env.MAIL_FROM;
const api = process.env.API_HOST;

const transporter = nodemailer.createTransport({
  host,
  port,
  secure: true,
  auth: {
    user,
    pass,
  },
});

const templatePath = path.join(__dirname, "../../templates");
const templater = new Eta({ views: templatePath })

export const SendMail = async (to: string, subject: string, text: string, html: string) => {
  try {
    const info = await transporter.sendMail({
      from,
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
      api,
      email: to
  });
  
  const subject = `You got a new part offer!`;
  await SendMail(to, subject, "", html);
}

// Send it to salesman after successful part offer sending
export const sendPartOfferNotification = async (to: string, offerPart: string, offerData: object) => {
  const html = templater.render("./mails/partOffer", { 
      offerPart,
      offerData,
      api,
      email: to,
      emailForSalesman: true,
  });
  
  const subject = `You sent a new part offer!`;
  await SendMail(to, subject, "", html);
}

// Send it to buyer after successful part request sent
export const sendPartRequestDetails = async (to: string, offerPart: string, offerData: object) => {
  const html = templater.render("./mails/partRequest", { 
      offerPart,
      offerData,
      api,
      email: to,
  });
  
  const subject = `You sent a new part request!`;
  await SendMail(to, subject, "", html);
}