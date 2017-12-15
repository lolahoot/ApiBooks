const mongoose = require ("mongoose";)
const Schema = mongoose.Schema;

const customerSchema = new Schema ({
  name: String,
  phone: String,
  email: String,
  address: {
    street: String,
    city: String,
    State: String,
    Zip: String
  },
  logIn: {
    userName: String,
    password: String
  }

  module.exports = mongoose.model("AddCustomer", customerSchema);
