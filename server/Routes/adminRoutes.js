const express = require('express');
const router = express.Router();
const {login, upload,urlUpload}  = require('../Controllers/adminContraller');
const authenticate = require('../Middleware/authenticate');



router.post('/login', login )

router.get('/auth',authenticate,upload)
router.post('/urlUpload',urlUpload)

module.exports = router;