require("dotenv").config();

const app = require("./src/app"); // adjust path if needed

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// require('dotenv').config();
// const express = require("express");
// const app = require('./src/app');
// const userRoutes = require("./routes/user.routes");

// app.use("/api/users", userRoutes);


// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

