const express = require("express");
const axios = require("axios"); // To call Python service
const app = express();
const PORT = 5000;

app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Node.js backend is running 🚀");
});

// Route to send text to Python AI service
app.post("/analyze", async (req, res) => {
  const { text } = req.body;

  try {
    // Call Python service (running on port 8000)
    const response = await axios.post("http://127.0.0.1:8000/process", {
      text: text,
    });

    res.json({
      original: text,
      summary: response.data.summary,
      tags: response.data.tags,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "AI service not available" });
  }
});

app.listen(PORT, () => {
  console.log(`Node.js server running on http://localhost:${PORT}`);
});
