const { model } = require("mongoose");
const {HoldingsSchema} = require("../schemas/HoldingsSchema");

module.exports.HoldingsModel = model ("holding", HoldingsSchema);
