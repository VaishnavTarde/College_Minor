const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const eventRoutes = require("./routes/eventRoutes");
const clubRoutes = require("./routes/clubRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// CONNECT MONGODB
connectDB();

// ROUTES
app.get("/", (req, res) => {
  res.send("API is running...");
});
app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/clubs", clubRoutes);

app.listen(5000, () =>
  console.log("Server running at http://localhost:5000")
);
