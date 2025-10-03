const express = require("express");
const router = express.Router();
const Helper = require("./Modal"); // ✅ Ensure this points to the correct model

// ✅ GET all helpers
router.get("/helpers", async (req, res) => {
    try {
        const helpers = await Helper.find();
        res.status(200).json(helpers);
    } catch (error) {
        console.error("❌ Error fetching helpers:", error);
        res.status(500).json({ message: error.message });
    }
});

// ✅ POST a new helper
router.post("/helpers", async (req, res) => {
    try {
        console.log("Received Data:", req.body);
        const { name, email, phone, address } = req.body;

        if (!name || !email || !phone || !address) {
            return res.status(400).json({ message: "All fields are required!" });
        }

        const newHelper = new Helper({ name, email, phone, address });
        await newHelper.save();
        
        res.status(201).json({ message: "Helper added successfully!", newHelper });
    } catch (error) {
        console.error("❌ Error adding helper:", error);
        res.status(500).json({ message: "Server error!" });
    }
});

// ✅ DELETE Helper by ID (Fixed issue)
router.delete("/helpers/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedHelper = await Helper.findByIdAndDelete(id);

        if (!deletedHelper) {
            return res.status(404).json({ message: "Helper not found" });
        }

        res.status(200).json({ message: "Helper deleted successfully" });
    } catch (error) {
        console.error("❌ Error deleting helper:", error);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router; 
