require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Todo = require("./models/Todo");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/web_lab_experiment_8";

app.get("/api/todos", async (_req, res) => {
  const todos = await Todo.find().sort({ createdAt: -1 });
  res.json(todos);
});

app.post("/api/todos", async (req, res) => {
  const { title } = req.body;
  if (!title || !title.trim()) {
    return res.status(400).json({ message: "Title is required." });
  }

  const todo = await Todo.create({ title: title.trim() });
  return res.status(201).json(todo);
});

app.put("/api/todos/:id", async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  const todo = await Todo.findByIdAndUpdate(
    id,
    {
      ...(title !== undefined ? { title: title.trim() } : {}),
      ...(completed !== undefined ? { completed } : {})
    },
    { new: true, runValidators: true }
  );

  if (!todo) {
    return res.status(404).json({ message: "Todo not found." });
  }

  return res.json(todo);
});

app.delete("/api/todos/:id", async (req, res) => {
  const { id } = req.params;
  const removed = await Todo.findByIdAndDelete(id);

  if (!removed) {
    return res.status(404).json({ message: "Todo not found." });
  }

  return res.json({ message: "Todo deleted." });
});

app.use((err, _req, res, _next) => {
  res.status(500).json({ message: err.message || "Server error." });
});

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`API server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error.message);
  });
