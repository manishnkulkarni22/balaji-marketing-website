const { db } = require('../../config/firebase');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const User = require("./auth.model");

exports.sendOtp = async (req, res) => {
  try {
    const { mobile } = req.body;

    if (!mobile) {
      return res.status(400).json({ message: "Mobile number required" });
    }

    // Generate 6 digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    const expiry = Date.now() + 5 * 60 * 1000; // 5 minutes

    await db.collection('otp').doc(mobile).set({
      otp,
      expiry,
      createdAt: new Date()
    });

    res.json({
      message: "OTP sent successfully",
      otp   // ⚠ Only for testing, remove later
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send OTP" });
  }
};
exports.verifyOtp = async (req, res) => {
  try {
    const { mobile, otp } = req.body;

    if (!mobile || !otp) {
      return res.status(400).json({ message: "Mobile and OTP required" });
    }

    const otpDoc = await db.collection('otp').doc(mobile).get();

    if (!otpDoc.exists) {
      return res.status(400).json({ message: "OTP not found" });
    }

    const data = otpDoc.data();

    // Check expiry
    if (Date.now() > data.expiry) {
      await db.collection('otp').doc(mobile).delete();
      return res.status(400).json({ message: "OTP expired" });
    }

    // Check OTP match
    if (data.otp !== otp) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    // OTP is valid → delete it
    await db.collection('otp').doc(mobile).delete();

    res.json({
      message: "OTP verified successfully"
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "OTP verification failed" });
  }
};
exports.setPassword = async (req, res) => {
  try {
    const { mobile, password } = req.body;

    if (!mobile || !password) {
      return res.status(400).json({ message: "Mobile and password required" });
    }

    // Check if user already exists
    const userDoc = await db.collection('users').doc(mobile).get();

    if (userDoc.exists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user
    await db.collection('users').doc(mobile).set({
      mobile,
      password: hashedPassword,
      role: "user",
      createdAt: new Date()
    });

    res.json({
      message: "Password set successfully. Account created."
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to set password" });
  }
};
exports.login = async (req, res) => {
  try {
    const { mobile, password } = req.body;

    if (!mobile || !password) {
      return res.status(400).json({ message: "Mobile and password required" });
    }

    // Get user from Firestore
    const userDoc = await db.collection("users").doc(mobile).get();

    if (!userDoc.exists) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = userDoc.data();

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT
    const token = jwt.sign(
      {
        mobile: user.mobile,
        role: user.role
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    res.json({
      message: "Login successful",
      token,
      user: {
        mobile: user.mobile,
        role: user.role
      }
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Login failed" });
  }
};
