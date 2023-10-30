import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp-relay.brevo.com',
  port: 587, 
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'o.zhuravko@gmail.com',
    pass: 't0BU98nVANjWaZIh',
  },
});

export const sendEmail = async (recipient: string, subject: string, body: string) => {
  const mailOptions = {
    from: 'o.zhuravko@gmail.com',
    to: recipient,
    subject,
    text: body,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};
