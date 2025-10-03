const Helper = require("./Modal");

// ✅ POST Method - Add Helper
exports.addHelper = async (req, res) => {
  try {
    const { name, email, phone, address } = req.body;

    if (!name || !email || !phone || !address) {
      return res.status(400).json({ error: "All fields are required!" });
    }

    const newHelper = new Helper({ name, email, phone, address });
    await newHelper.save();

    res.status(201).json({ message: "Helper added successfully!", newHelper });
  } catch (error) {
    console.error("❌ Error adding helper:", error);
    res.status(500).json({ error: "Server error!" });
  }
};

// ✅ GET Method - Fetch All Helpers
exports.getHelpers = async (req, res) => {
  try {
    const helpers = await Helper.find();
    res.status(200).json(helpers);
  } catch (error) {
    console.error("❌ Error fetching helpers:", error);
    res.status(500).json({ error: "Server error!" });
  }
};

