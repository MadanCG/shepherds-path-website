const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;



exports.signup = async (req, res) => {
  const { name, email, password } = req.body;


  if (!name || !email || !password) {
   
    return res.status(400).json({ error: "All fields are required" });
  }

  const role = "user"; // default role

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    console.log(" Existing user found?", !!existingUser);

    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = new User({ name, email, password: hashedPassword, role });
    await newUser.save();

    console.log("User created successfully:", newUser);

    return res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error(" Signup failed with error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;


  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      console.log(" User not found for email:", email);
      return res.status(404).json({ error: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log(" Password does not match");
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.json({
      token,
      user: { id: user._id, name: user.name, role: user.role },
    });
  } catch (err) {
    console.error(" Login failed with error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};
