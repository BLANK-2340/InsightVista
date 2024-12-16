const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const dataRoutes = require('./routes/data');
const insightRoutes = require('./routes/insights');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/data', dataRoutes);
app.use('/insights', insightRoutes);

module.exports = app;
