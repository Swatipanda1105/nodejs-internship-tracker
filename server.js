
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

let internships = [];

// Add internship
app.post("/api/internships", (req, res) => {
  const { company, role, status } = req.body;

  if (!company || !role || !status) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newInternship = {
    id: internships.length + 1,
    company,
    role,
    status
  };

  internships.push(newInternship);
  res.json(newInternship);
});

// Get all internships
app.get("/api/internships", (req, res) => {
  res.json(internships);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
