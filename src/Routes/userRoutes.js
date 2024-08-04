const express = require('express');
const router = express.Router();
const { getUserProfile, updateUserProfile } = require('../Controllers/userControllers');
const { protect } = require('../Middleware/authMiddleware');

router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);

module.exports = router;
