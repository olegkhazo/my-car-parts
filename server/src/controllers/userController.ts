import { Request, Response, NextFunction } from 'express';
import { UsersModel } from '../models/user.models';
import { sendUsersAccountActivationLink } from '../services/mailer.service';
import bcrypt from 'bcrypt';
const jwt = require('jsonwebtoken');
const API_HOST = process.env.API_HOST;

export const registerUser = async (req: Request, res: Response, next: NextFunction) => {

  try {
    const existingUser = await UsersModel.findOne({ email: req.body.email });

    if (existingUser) {
      console.log("already exist");
      return res.status(400).json({ error: 'User with such email already exist' });
    }

    const activationToken = jwt.sign({ email: req.body.email }, 'activation-secret-key', { expiresIn: '1h' });
    console.log(activationToken);

    Object.assign(req.body, activationToken);

    const newUser = new UsersModel(req.body);
    await newUser.save();
    res.status(201).json(newUser);

    const activationLink = `${API_HOST}api/activate/${activationToken}`;


    await sendUsersAccountActivationLink(req.body.email, activationLink);

  } catch (error) {
    next(error);
  }
};
  
export const activateUser = async (req: Request, res: Response, next: NextFunction) => {
  const { token } = req.params;

  try {
    const decodedToken = jwt.verify(token, 'activation-secret-key');
    const { userEmail } = decodedToken;

    await UsersModel.findOneAndUpdate({ userEmail }, { $set: { isActive: true, activationToken: null } });

    res.redirect('http://localhost:3000/activation-success');
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Wrong activation token' });
  }
};
  

export const authoriseUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await UsersModel.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'Wrong authentification data' });
    }

    // Pssword check
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Wrong user data' });
    }

    // JWT token generation
    const token = jwt.sign({ userId: user._id, email: user.email }, 'your-secret-key', { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Внутренняя ошибка сервера' });
  }
};