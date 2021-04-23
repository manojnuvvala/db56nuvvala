const mongoose = require("mongoose")
const palaceSchema = mongoose.Schema({
palacename: {
    type: String,
    required: [true, "Palace name is Required"]
},
location: String,
constructed_year: {
    type: Number,

        min:[1000,"Minimum year for construction"],
        max:[2000,"Maximum year for construction"]
}

})
module.exports = mongoose.model("Palace", palaceSchema)
