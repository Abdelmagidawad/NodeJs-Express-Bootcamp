import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello From About");
});

router.get("/me", (req, res) => {
  res.send("Contact About Me+2015896354");
});
router.get("/company", (req, res) => {
  res.send("Welcome to you on India_MIG Company");
});

export default router;
