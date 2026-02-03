const {Schema} = require("mongoose");

const OrdersSchema = new Schema({
    name: String,
    qty: Number,
    price: Number,
    mode: String,
    // store when the order was created
    createdAt: { type: Date, default: Date.now },
});

module.exports = {OrdersSchema};