const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlPraser: true,
  useUnifiedToplogy: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
