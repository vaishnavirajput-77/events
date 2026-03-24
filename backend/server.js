import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';
import serviceRoutes from './routes/services.js';
import packageRoutes from './routes/packages.js';
import orderRoutes from './routes/orders.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/eventdhara';
    await mongoose.connect(uri);
    console.log('✅ MongoDB connected successfully');
  } catch (err) {
    console.log('⚠️ MongoDB not available, running in demo mode');
  }
};

connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/packages', packageRoutes);
app.use('/api/orders', orderRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'EventDhara Pro API is running' });
});

// Smart Recommendations
app.get('/api/recommend', (req, res) => {
  const { budget, type } = req.query;
  const budgetNum = parseInt(budget) || 50000;
  const recommendations = [];

  if (budgetNum < 25000) {
    recommendations.push(
      { name: 'Basic Birthday', price: 15000, type: 'birthday' },
      { name: 'Romantic Room Decor', price: 12000, type: 'anniversary' },
      { name: 'Friends Get-together', price: 18000, type: 'party' }
    );
  } else if (budgetNum < 100000) {
    recommendations.push(
      { name: 'Premium Birthday', price: 35000, type: 'birthday' },
      { name: 'Engagement Ceremony', price: 80000, type: 'wedding' },
      { name: 'Luxury Anniversary', price: 50000, type: 'anniversary' }
    );
  } else {
    recommendations.push(
      { name: 'Wedding Day Package', price: 300000, type: 'wedding' },
      { name: 'Gold Wedding Package', price: 500000, type: 'wedding' },
      { name: 'Reception Package', price: 200000, type: 'wedding' }
    );
  }

  res.json({ recommendations, budget: budgetNum, type: type || 'all' });
});

app.listen(PORT, () => {
  console.log(`🚀 EventDhara Pro API running on port ${PORT}`);
});
