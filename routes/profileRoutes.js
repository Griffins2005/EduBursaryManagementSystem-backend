const express = require('express');
const profileController = require('../controllers/profileController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Apply authentication middleware to routes that require authentication
router.post('/create', authMiddleware.authenticate, profileController.createProfile);
router.get('/me', authMiddleware.authenticate, profileController.getProfile); // No userId param needed

module.exports = router;
