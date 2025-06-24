const express = require('express');
const router = express.Router();
const {uploadPlumbing,uploadElectrical,uploadWelding,Wdbimage,Pdbimage,Edbimage}  = require('../Controllers/uploadController');


router.post('/uploadPlumbing',uploadPlumbing)
router.post('/uploadElectrical',uploadElectrical)
router.post('/uploadWelding',uploadWelding)
router.get('/Wdbimage',Wdbimage)
router.get('/Pdbimage',Pdbimage)
router.get('/Edbimage',Edbimage)


module.exports = router;