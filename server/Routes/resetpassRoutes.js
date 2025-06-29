const express = require('express');
const router = express.Router();
const { otp,verifyotp, resetpassword}  = require('../Controllers/resetPasswordController');
const authenticate = require('../Middleware/authenticate');



router.post('/otp', otp )
router.post('/verifyotp', verifyotp )
router.post('/resetpassword', resetpassword )

module.exports = router;