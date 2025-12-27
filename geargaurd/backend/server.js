require("dotenv").config();
const express = require("express");
const admin = require("firebase-admin");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(require("./serviceAccountKey.json")),
});

// Protected route
app.get("/protected", async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = await admin.auth().verifyIdToken(token);
    res.json({ message: "Access granted", uid: decoded.uid });
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
