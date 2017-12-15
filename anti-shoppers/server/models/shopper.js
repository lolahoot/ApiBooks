const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const shopperSchema = new Schema({
  name: String,
  phone: String,
  photo: URL
});

module.exports = mongoose.model("AddShopper", shopperSchema);
