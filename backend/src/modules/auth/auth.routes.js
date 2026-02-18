const express = require('express');
const router = express.Router();
const authController = require('./auth.controller');

router.get('/test', (req, res) => {
  res.send('Auth route working');
});
// Send OTP
router.post('/send-otp', authController.sendOtp);
router.post('/verify-otp', authController.verifyOtp);
router.post('/set-password', authController.setPassword);
router.post("/login", authController.login);

module.exports = router;