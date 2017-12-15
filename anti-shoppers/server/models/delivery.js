const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const deliverySchema = new Schema({
  time: Date
})


module.exports = mongoose.model("Delivery", deliverySchema);
