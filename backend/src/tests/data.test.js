const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();

let token;
beforeAll(async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  const user = new User({
    email: 'datauser@example.com',
    passwordHash: 'hash' // not checking password for this test
  });
  await user.save();
  token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
});
afterAll(async () => {
  await User.deleteMany({});
  await mongoose.connection.close();
});

describe('Data Routes', () => {
  it('should return empty datasets list for a new user', async () => {
    const res = await request(app)
      .get('/data/datasets')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBe(0);
  });
});
