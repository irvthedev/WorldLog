
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

// connect to mongoose
mongoose.connect("mongodb+srv://irvjau:adminsuperuser@cluster0.jiwbfhh.mongodb.net/WorldLog", )

// require route
app.use("/", require("./routes/DestinationRoute"));

app.listen(3001, function() {
    console.log("express server is running on port 3001");
});