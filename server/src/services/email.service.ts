import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'mynextparts.com',
  port: 465,
  secure: true,
  auth: {
    user: 'info@mynextparts.com',
    pass: 'Applemak1234$$$',
  },
});

export const sendEmail = async (recipient: string, subject: string, body: string) => {
  const mailOptions = {
    from: 'info@mynextparts.com',
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
