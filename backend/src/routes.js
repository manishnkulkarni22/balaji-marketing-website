const express = require('express');
const router = express.Router();
const { db } = require('./config/firebase');
const userRoutes = require("./routes/user.routes");

router.use("/users", userRoutes);

module.exports = router;

const authRoutes = require('./modules/auth/auth.routes');

// Health check route
router.get('/health', async (req, res) => {
  try {
    const testRef = db.collection('test').doc('connection');
    await testRef.set({ status: "Connected" });

    res.json({ status: "Backend + Firestore Connected 🚀" });
  } catch (error) {
    res.status(500).json({ error: "Firestore connection failed" });
  }
});

// Auth routes
router.use('/auth', authRoutes);

module.exports = router;
