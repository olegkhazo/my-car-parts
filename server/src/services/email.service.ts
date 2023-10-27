import nodemailer from 'nodemailer';
// const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'uiscarparts@gmail.com',
        pass: 'Zhur19881986',
    },

    

});

export const sendEmail = async (recipient: string, subject: string, body: string) => {
    const mailOptions = {
        from: 'uiscarparts@gmail.com',
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