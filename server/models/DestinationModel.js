
const mongoose = require("mongoose");

const destinationSchema = {
    Name : String,
    Country : String,
    FutureDestination : Boolean
}

const Destination = mongoose.model("Destination", destinationSchema);

module.exports = Destination;