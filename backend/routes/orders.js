import express from 'express';
import Order from '../models/Order.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Create order
router.post('/', auth, async (req, res) => {
  try {
    const order = new Order({ ...req.body, userId: req.user.id });
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get user orders
router.get('/user/:userId', auth, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId }).populate('packageId');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
