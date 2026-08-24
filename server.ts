import dns from 'dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// Import routes (Inayos ang paths para sa root directory level)
import authRoutes from './auth.routes';
import gameRoutes from './game.routes';
import userRoutes from './user.routes';
import promotionRoutes from './promotion.routes';
import transactionRoutes from './transaction.routes';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = 'mongodb+srv://sandovalspetiten_db_user:r1MLjFuai7rMt5c6@cluster0.lha9ffg.mongodb.net/cassanova?retryWrites=true&w=majority';

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/games', gameRoutes);
app.use('/api/users', userRoutes);
app.use('/api/promotions', promotionRoutes);
app.use('/api/transactions', transactionRoutes);

// Health check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', message: 'Cassanova API is running' });
});

// Database connection
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

export default app;
