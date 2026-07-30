const express = require("express");

const app = express();

const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
    res.send("🚀 GitHub Actions CI/CD Demo is Running Successfully!");
});

app.get("/health", (req, res) => {
    res.json({
        status: "UP",
        application: "GitHub Actions Node.js CI/CD",
        version: "1.0.0"
    });
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});