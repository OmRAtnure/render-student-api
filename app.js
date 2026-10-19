const express = require("express");
const app = express();
app.use(express.json());

const students = [
  { id: 1, name: "Om", course: "Node JS" },
  { id: 2, name: "Priya", course: "Java" },
  { id: 3, name: "Ravi", course: "Python" },
];

app.get("/", (Req, res) => {
  res.json({
    message: "Student API is running successfully",
    environmnet: process.env.NODE_ENV || "Developmnet",
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
  });
});

app.get("/students", (req, res) => {
  res.json(students);
});

app.post("/student", (req, res) => {
  const { id, name, course } = req.body;
  students.push({ id, name, course });
  res.status(201).json({
    message: "student recivied successfully",
    student: { id, name, course },
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port", PORT);
});
