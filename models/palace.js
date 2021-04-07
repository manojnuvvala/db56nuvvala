const mongoose = require("mongoose")
const palaceSchema = mongoose.Schema({
palacename: String,
location: String,
constructed_year: Number
})
module.exports = mongoose.model("Palace", palaceSchema)
