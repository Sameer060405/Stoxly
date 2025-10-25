require("dotenv").config();
const mongoose = require("mongoose");
const { PositionsModel } = require("./model/PositionsModel");

// positions array from your data.js
const positions = [
  { product: "CNC", name: "EVEREADY", qty: 2, avg: 316.27, price: 312.35 },
  { product: "CNC", name: "JUBLFOOD", qty: 1, avg: 3124.75, price: 3082.65 },
];

const uri = process.env.MONGO_URL;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

async function updateAvgCostPositions() {
  try {
    for (let p of positions) {
      // Find the document by name and set avgCost
      const result = await PositionsModel.updateOne(
        { name: p.name.trim() },       // match name exactly, trimmed
        { $set: { avgCost: p.avg } }   // write avg value into avgCost
      );
      console.log(`Updated ${p.name}:`, result.modifiedCount ? "Success" : "No change");
    }
    console.log("All positions updated!");
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.connection.close();
  }
}

updateAvgCostPositions();
