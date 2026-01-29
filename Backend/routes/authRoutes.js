const express = require("express");
const router = express.Router();
const User = require("../models/User");


// ======================
// SIGN UP ROUTE
// ======================
router.post("/signup", async (req, res) => {
  const { email, password, role } = req.body;

  try {
    // check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // create new user
    const user = new User({
      email,
      password,
      role
    });

    await user.save();
    console.log("New user registered:", email, "as", role);
    res.json({
      message: "Signup successful",
      role
    });

  } catch (error) {
    res.status(500).json({ message: "Signup failed" });
  }
});


// ======================
// LOGIN ROUTE
// ======================
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({
      message: "Login successful",
      role: user.role
    });

  } catch (error) {
    res.status(500).json({ message: "Login failed" });
  }
});

module.exports = router;
