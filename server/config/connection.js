const mongoose = require("mongoose");
require("dotenv").config({ path: "./config.env" });

mongoose.connect(process.env.MONGODB_URI);

module.exports = mongoose.connection;
