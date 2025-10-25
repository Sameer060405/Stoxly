require("dotenv").config();
const mongoose = require("mongoose");
const { HoldingsModel } = require("./model/HoldingsModel");

// Your holdings data
const holdings = [
  { name: "BHARTIARTL", avg: 538.05 },
  { name: "HDFCBANK", avg: 1383.4 },
  { name: "HINDUNILVR", avg: 2335.85 },
  { name: "INFY", avg: 1350.5 },
  { name: "ITC", avg: 202.0 },
  { name: "KPITTECH", avg: 250.3 },
  { name: "M&M", avg: 809.9 },
  { name: "RELIANCE", avg: 2193.7 },
  { name: "SBIN", avg: 324.35 },
  { name: "SGBMAY29", avg: 4727.0 },
  { name: "TATAPOWER", avg: 104.2 },
  { name: "TCS", avg: 3041.7 },
  { name: "WIPRO", avg: 489.3 }
];

const uri = process.env.MONGO_URL;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

async function updateAvgCost() {
    try {
        const operations = holdings.map(h => ({
            updateOne: {
                filter: { name: h.name },
                update: { $set: { avgCost: h.avg } }
            }
        }));

        await HoldingsModel.bulkWrite(operations);
        console.log("avgCost updated successfully in all documents!");
    } catch (err) {
        console.log(err);
    } finally {
        mongoose.connection.close();
    }
}

updateAvgCost();
