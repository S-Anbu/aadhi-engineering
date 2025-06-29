const express = require('express');
const router = express.Router();
const {login, upload,islogin }  = require('../Controllers/adminContraller');
const authenticate = require('../Middleware/authenticate');



router.post('/login', login )
router.post('/islogin', islogin )
router.get('/auth',authenticate,upload)



module.exports = router;