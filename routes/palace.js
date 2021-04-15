var express = require('express');
const palace_controlers= require('../controllers/palace');
var router = express.Router();

/* GET home page. */
router.get('/', palace_controlers.palace_view_all_Page);
router.get('/detail', palace_controlers.palace_view_one_Page);
/* GET create palace page */
router.get('/create', palace_controlers.palace_create_Page);
/* GET create update page */
router.get('/update', palace_controlers.palace_update_Page);
/* GET create palace page */
router.get('/delete', palace_controlers.palace_delete_Page);
module.exports = router;
