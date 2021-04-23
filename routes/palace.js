var express = require('express');
const palace_controlers= require('../controllers/palace');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 req.session.returnTo = req.originalUrl;
 res.redirect("/login");
 }
/* GET home page. */
router.get('/', palace_controlers.palace_view_all_Page);
router.get('/detail', palace_controlers.palace_view_one_Page);
/* GET create palace page */
router.get('/create', secured, palace_controlers.palace_create_Page);
/* GET create update page */
router.get('/update', secured,palace_controlers.palace_update_Page);
/* GET create palace page */
router.get('/delete', secured,palace_controlers.palace_delete_Page);
module.exports = router;
