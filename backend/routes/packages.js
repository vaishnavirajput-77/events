import express from 'express';
import Package from '../models/Package.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Create package
router.post('/', auth, async (req, res) => {
  try {
    const pkg = new Package({ ...req.body, userId: req.user.id });
    await pkg.save();
    res.status(201).json(pkg);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get user packages
router.get('/user/:userId', auth, async (req, res) => {
  try {
    const packages = await Package.find({ userId: req.params.userId });
    res.json(packages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update package
router.put('/:id', auth, async (req, res) => {
  try {
    const pkg = await Package.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(pkg);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
