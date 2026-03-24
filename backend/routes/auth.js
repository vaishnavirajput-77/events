import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Name, email and password are required' });
    }
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ error: 'Email already registered' });

    const user = new User({ name, email, password, phone });
    await user.save();

    const token = jwt.sign({ id: user._id, email }, process.env.JWT_SECRET || 'eventdhara_pro_secret_key_2024', { expiresIn: '7d' });
    res.status(201).json({ user: { id: user._id, name, email, phone }, token });
  } catch (err) {
    res.status(500).json({ error: 'Server error: ' + err.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'Email and password required' });

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'Invalid credentials' });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id, email }, process.env.JWT_SECRET || 'eventdhara_pro_secret_key_2024', { expiresIn: '7d' });
    res.json({ user: { id: user._id, name: user.name, email, phone: user.phone }, token });
  } catch (err) {
    res.status(500).json({ error: 'Server error: ' + err.message });
  }
});

export default router;
