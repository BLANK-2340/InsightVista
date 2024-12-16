const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  if(!email || !password) return res.status(400).json({ error: 'Email and password required' });
  
  const existingUser = await User.findOne({ email });
  if(existingUser) return res.status(400).json({ error: 'User already exists' });
  
  const passwordHash = await bcrypt.hash(password, 10);
  const user = new User({ email, passwordHash });
  await user.save();
  
  res.json({ message: 'User registered' });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if(!email || !password) return res.status(400).json({ error: 'Email and password required' });
  
  const user = await User.findOne({ email });
  if(!user) return res.status(400).json({ error: 'Invalid credentials' });
  
  const match = await bcrypt.compare(password, user.passwordHash);
  if(!match) return res.status(400).json({ error: 'Invalid credentials' });
  
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
  res.json({ token });
});

module.exports = router;
