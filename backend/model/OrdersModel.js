const { model } = require("mongoose");
const {OrdersSchema} = require("../schemas/OrdersSchema");

module.exports.OrdersModel = model ("order", OrdersSchema);
