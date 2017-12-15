const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shoppingListSchema = new Schema({
  store: String,
  items: [String]
})

module.exports = mongoose.model("ShoppingList", shoppingListSchema);
