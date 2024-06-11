const mongoose = require("mongoose");

const post_schema = new mongoose.Schema({
  title: String,
});

const post_model = mongoose.model("posts", post_schema);

module.exports = { post_model };
