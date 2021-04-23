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
exports.palace_detail = async function(req, res) {
    console.log("detail"  + req.params.id)
    try {
        result = await palace.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }

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
    res.send(err)
    rres.status(500)
    }
    };

// Handle palace delete form on DELETE.
exports.palace_delete = async function(req, res) {
    console.log("delete "  + req.params.id)
    try {
        result = await palace.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};


// Handle palace update form on PUT.
exports.palace_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await palace.findById( req.params.id)
        // Do updates of properties
        if(req.body.palacename) toUpdate.palacename = req.body.palacename;
        if(req.body.location) toUpdate.location = req.body.location;
        if(req.body.constructed_year) toUpdate.constructed_year = req.body.constructed_year;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
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

    // Handle a show one view with id specified by query
exports.palace_view_one_Page = async function(req, res) {
    console.log("single view for id "  + req.query.id)
    try{
        result = await palace.findById( req.query.id)
        res.render('palacedetail', 
{ title: 'palace Detail', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for creating a palace.
// No body, no in path parameter, no query.
// Does not need to be async
exports.palace_create_Page =  function(req, res) {
    console.log("create view")
    try{
        res.render('palacecreate', { title: 'palace Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for updating a palace.
// query provides the id
exports.palace_update_Page =  async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await palace.findById(req.query.id)
        res.render('palaceupdate', { title: 'palace Update', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle a delete one view with id from query
exports.palace_delete_Page = async function(req, res) {
    console.log("Delete view for id "  + req.query.id)
    try{
        result = await palace.findById(req.query.id)
        res.render('palacedelete', { title: 'palace Delete', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};












