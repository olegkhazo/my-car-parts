import { Request, Response, NextFunction } from 'express';
import { UsersModel } from '../models/user.models';
import { sendUsersAccountActivationLink } from '../services/mailer.service';
import bcrypt from 'bcrypt';
const jwt = require('jsonwebtoken');
const API_HOST = process.env.API_HOST;
const CLIENT_HOST = process.env.CLIENT_HOST;

export const registerUser = async (req: Request, res: Response, next: NextFunction) => {
  const SECRET_KEY: string = process.env.SECRET_KEY as string;
  
  try {
    const existingUser = await UsersModel.findOne({ email: req.body.email });

    if (existingUser) {
      return res.status(400).json({ error: 'User with such email already exists' });
    }

    // Password hashing
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

    // Rewriting password to hashed one
    req.body.password = hashedPassword;

    const activationToken = jwt.sign({ email: req.body.email }, SECRET_KEY, { expiresIn: '1h' });

    Object.assign(req.body, activationToken);

    const newUser = new UsersModel(req.body);
    await newUser.save();
    res.status(201).json(newUser);

    const activationLink = `${API_HOST}api/activate/${activationToken}`;

    await sendUsersAccountActivationLink(req.body.email, activationLink);

  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
  
export const activateUser = async (req: Request, res: Response, next: NextFunction) => {
  const SECRET_KEY: string = process.env.SECRET_KEY as string;

  const { token } = req.params;

  try {
    const decodedToken = jwt.verify(token, SECRET_KEY);
    const { email } = decodedToken;

    await UsersModel.findOneAndUpdate({ email }, { $set: { isActive: true, activationToken: null } });

    res.redirect(`${CLIENT_HOST}activation-success`);
  } catch (error) {
    res.status(401).json({ error: 'Invalid or expired activation token' });
  }
};
  

export const authoriseUser = async (req: Request, res: Response, next: NextFunction) => {
  const SECRET_KEY: string = process.env.SECRET_KEY as string;

  try {
    // Find user by email
    const user = await UsersModel.findOne({ email: req.body.email });

    if (!user) {
      return res.status(401).json({ error: 'Wrong authentification data' });
    }

    if (!user.isActive) {
      return res.status(401).json({ error: 'Not activated' });
    }

    // Password check
    const passwordMatch = await bcrypt.compare(req.body.password, user.password);

    if (passwordMatch) {

      // JWT token generation
      const token = jwt.sign({ userId: user._id?.toString(), email: user.email }, SECRET_KEY, { expiresIn: '1h' });
      res.json({ token });

    } else {

      return res.status(401).json({ error: 'Wrong user data' });  
          
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};