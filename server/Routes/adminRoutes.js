const express = require('express');
const router = express.Router();
const {login, upload, otp,verifyotp, resetpassword}  = require('../Controllers/adminContraller');
const authenticate = require('../Middleware/authenticate');



router.post('/login', login )
router.post('/otp', otp )
router.post('/verifyotp', verifyotp )
router.post('/resetpassword', resetpassword )
router.get('/auth',authenticate,upload)



module.exports = router;