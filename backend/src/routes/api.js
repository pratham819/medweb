const express = require('express');
const router = express.Router();

// Health check route
router.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'Backend server is running smoothly',
    timestamp: new Date().toISOString()
  });
});

// Example API endpoint
router.get('/data', (req, res) => {
  res.json({
    success: true,
    data: [
      { id: 1, title: 'Welcome to Express Backend' },
      { id: 2, title: 'Connected with Next.js Frontend' }
    ]
  });
});

module.exports = router;
