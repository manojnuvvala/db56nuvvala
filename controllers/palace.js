var palace = require('../models/palace');
// List of all palaces
exports.palace_list = async function(req, res) {
 res.send('NOT IMPLEMENTED: palace list');
};
// List of all palaces
exports.palace_list = async function(req, res) {
    try{
    thepalaces = await palace.find();
    res.send(thepalaces);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
    };
// for a specific palace.
exports.palace_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: palace detail: ' + req.params.id);
};
// Handle palace create on POST.
exports.palace_create_post = async function(req, res) {
    console.log(req.body)
    let document = new palace();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"palacetype":"goat", "cost":12, "size":"large"}
    document.palacename = req.body.palacename;
    document.location = req.body.location;
    document.constructed_year = req.body.constructed_year;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
    };

// Handle palace delete form on DELETE.
exports.palace_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: palace delete DELETE ' + req.params.id);
};
// Handle palace update form on PUT.
exports.palace_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: palace update PUT' + req.params.id);
};
// VIEWS
// Handle a show all view
exports.palace_view_all_Page = async function(req, res) {
    try{
    thepalaces = await palace.find();
    res.render('palace', { title: 'palace Search Results', results: thepalaces });
    }
    catch(err){
    res.ststus(500);
    res.send(`{"error": ${err}}`);
    }
    };
