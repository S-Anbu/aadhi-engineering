const express = require('express');
const router = express.Router();
const {login, upload,islogin ,googlelogin}  = require('../Controllers/adminContraller');
const authenticate = require('../Middleware/authenticate');



router.post('/login', login )
router.post('/islogin', islogin )
router.post('/googlelogin', googlelogin )
router.get('/auth',authenticate,upload)



module.exports = router;