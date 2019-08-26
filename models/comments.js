var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var CommentSchema = new Schema({
  title: String,
  body: String
});

// This creates our model from the above schema, using mongoose's model method
var Comment = mongoose.model("Note", CommentSchema);

// Export the Note model
module.exports = Comment;
