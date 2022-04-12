var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var GenreSchema = new Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 100 }, //reference to the associated book
  category: {
    type: String,
    required: true,
    enum: ["Fiction", "Maintenance", "Loaned", "Reserved"],
    default: "Maintenance"
  },
  due_back: { type: Date, default: Date.now }
});

// Virtual for genre's URL
GenreSchema.virtual("url").get(function () {
  return "/catalog/bookinstance/" + this._id;
});

//Export model
module.exports = mongoose.model("BookInstance", GenreSchema);
