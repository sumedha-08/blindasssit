const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // ✅ Important for frontend access
const app = express();
const router = require("./Router");

// ✅ Middleware
app.use(express.json()); 
app.use(cors()); 

// ✅ Routes
app.use("/api", router);

// ✅ Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/blindassist")
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

// ✅ Start Server
app.listen(5000, () => console.log("Server running on port 5000"));
