const express = require('express');
const applicationController = require('../controllers/applicationController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Apply authentication middleware to routes that require authentication
router.post('/apply', authMiddleware.authenticate, applicationController.createApplication);
router.get('/user', authMiddleware.authenticate, applicationController.getUserApplications); // No userId param needed
router.get('/admin', authMiddleware.authenticate, applicationController.getAllApplications);

module.exports = router;
