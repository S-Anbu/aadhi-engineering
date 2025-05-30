const express = require('express');
const router = express.Router();
const  {getPriceDetails}  = require('../Controllers/priceTableController');



router.get('/scrape-table', getPriceDetails )



module.exports = router;