const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
  useNewUrlPraser: true,
  useUnifiedToplogy: true,
});

module.exports = mongoose.connection;
