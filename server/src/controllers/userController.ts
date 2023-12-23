import { Request, Response, NextFunction } from 'express';
import { UserModel } from '../models/user.models';
// import { sendPartRequestDetails } from '../services/mailer.service';
const jwt = require('jsonwebtoken');

export const registerUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;
  
    try {
      const existingUser = await UserModel.findOne({ username });
  
      if (existingUser) {
        return res.status(400).json({ error: 'Пользователь с таким именем уже существует' });
      }
  
      const activationToken = jwt.sign({ username }, 'activation-secret-key', { expiresIn: '1h' });
      console.log(activationToken);

      const newUser = new UserModel({ username, password, activationToken });
      await newUser.save();
  
      //const activationLink = `http://localhost:3000/api/activate/${activationToken}`;
      //const activationLink = `http://localhost:3000/activate/${activationToken}`;

      // const mailOptions = {
      //   from: 'your-email@gmail.com',
      //   to: 'user-email@example.com',
      //   subject: 'Активация аккаунта',
      //   text: `Для активации вашего аккаунта перейдите по следующей ссылке: ${activationLink}`,
      // };
  
      // await transporter.sendMail(mailOptions);
  
      // res.status(201).json({ message: 'Письмо с инструкциями по активации отправлено' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Что-то пошло не так' });
    }
  };
  
  export const activateUser = async (req: Request, res: Response) => {
    const { token } = req.params;
  
    try {
      const decodedToken = jwt.verify(token, 'activation-secret-key');
      const { username } = decodedToken;
  
      await UserModel.findOneAndUpdate({ username }, { $set: { isActive: true, activationToken: null } });
  
      res.redirect('http://localhost:3000/activation-success');
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: 'Неверный токен активации' });
    }
  };
  