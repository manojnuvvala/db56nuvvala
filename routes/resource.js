var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var palace_controller = require('../controllers/palace');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// palace ROUTES ///
// POST request for creating a palace.
router.post('/resource/palaces', palace_controller.palace_create_post);
// DELETE request to delete palace.
router.delete('/resource/palaces/:id', palace_controller.palace_delete);
// PUT request to update palace.
router.put('/resource/palaces/:id', palace_controller.palace_update_put);
// GET request for one palace.
router.get('/resource/palaces/:id', palace_controller.palace_detail);
// GET request for list of all palace items.
router.get('/resource/palaces', palace_controller.palace_list);
module.exports = router;

