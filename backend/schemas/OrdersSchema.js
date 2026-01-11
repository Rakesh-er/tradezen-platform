const { Schema } = require("mongoose");

module.exports.OrdersSchema = new Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
});
