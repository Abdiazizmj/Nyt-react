var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: String,
  date: Date,
  url: String
});

var index = mongoose.model("index", articleSchema);

module.exports = index;