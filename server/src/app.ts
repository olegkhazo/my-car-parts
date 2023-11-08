import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import apiRoutes from './routes/api';
import { errorHandler } from './middlewares/errorMiddleware';
import cors from 'cors';

const app = express();

app.use(cors());
// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/my-car-parts')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });

// Routes
app.use('/api', apiRoutes);

// Error middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
