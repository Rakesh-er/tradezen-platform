require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());

// --- Routes ---

app.get("/allHoldings", async (req, res) => {
  try {
    let getAllHoldings = await HoldingsModel.find({});
    res.json(getAllHoldings);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch holdings" });
  }
});

app.get("/allPositions", async (req, res) => {
  try {
    let getAllPositions = await PositionsModel.find({});
    res.json(getAllPositions);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch positions" });
  }
});

app.post("/newOrder", async (req, res) => {
  try {
    let newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();
    res.send("New order Saved!");
    console.log("Order Saved!");
  } catch (err) {
    console.error("Error saving order:", err);
    res.status(500).send("Error saving order");
  }
});

app.get("/allOrders", async (req, res) => {
  try {
    let allOrders = await OrdersModel.find({});
    res.json(allOrders);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

// --- Server Startup ---

async function startServer() {
  try {
    // Connect to MongoDB
    await mongoose.connect(uri);
    console.log("Database connected!");

    // Start server only after DB is ready
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
}

startServer();
