const mongoose = require("mongoose");

mongoose.connect(process.env.MONGOD_URI, {
  useNewUrlPraser: true,
  useUnifiedToplogy: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
