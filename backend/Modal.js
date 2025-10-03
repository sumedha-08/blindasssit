const mongoose = require("mongoose");

const HelperSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true }
});

module.exports = mongoose.model("Helper", HelperSchema);
