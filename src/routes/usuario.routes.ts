import express from "express";

export const usuarioRouter = express.Router();

usuarioRouter.get("/", (req, res) => {
  res.send("List of users");
});

usuarioRouter.post("/", (req, res) => {
  const { name, email } = req.body;
  // Save user in database
  res.send(`User ${name} (${email}) saved`);
});