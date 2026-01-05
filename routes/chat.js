const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", (req, res) => {
  res.render("chat", { reply: null });
});

router.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  try {
    const response = await axios.post(
      "http://localhost:11434/api/generate",
      {
        model: "phi3",
        prompt: userMessage,
        stream: false
      }
    );

    const reply = response.data.response;
    res.render("chat", { reply });
  } catch (error) {
    console.error("OLLAMA ERROR:", error.message);
    res.render("chat", { reply: "Error connecting to AI" });
  }
});

module.exports = router;