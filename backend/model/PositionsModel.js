const { model } = require("mongoose");
const PositionsSchema = require("../schemas/PositionsSchema");

module.exports.PositionsModel = model("position", PositionsSchema);
