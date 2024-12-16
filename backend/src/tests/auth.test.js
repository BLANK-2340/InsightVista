const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');
require('dotenv').config();
const User = require('../models/User');

beforeAll(async () => {
  await mongoose.connect(process.env.MONGODB_URI);
});
afterAll(async () => {
  await User.deleteMany({});
  await mongoose.connection.close();
});

describe('Auth Routes', () => {
  it('should register a user', async () => {
    const res = await request(app).post('/auth/register').send({
      email: 'test@example.com',
      password: 'password123'
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('User registered');
  });

  it('should login a user', async () => {
    const res = await request(app).post('/auth/login').send({
      email: 'test@example.com',
      password: 'password123'
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeDefined();
  });
});
