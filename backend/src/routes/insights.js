const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');

// Mock AI Insights
router.get('/', auth, (req, res) => {
  // Return some mock recommendations
  const insights = [
    "Consider filtering by the last quarter to spot recent trends.",
    "Focus on Category A vs Category B to identify performance differences.",
    "Apply a date range filter (e.g. Jan-Mar) to see seasonal effects."
  ];
  res.json({ insights });
});

module.exports = router;
