var express = require('express');
const palace_controlers= require('../controllers/palace');
var router = express.Router();

/* GET home page. */
router.get('/', palace_controlers.palace_view_all_Page);

module.exports = router;
