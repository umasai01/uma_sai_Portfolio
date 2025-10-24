import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();

// Use Render's dynamic port or fallback to 5000 locally
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: "https://uma-sai-portfolio.vercel.app", // your frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"]
}));
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("✅ Server is running successfully!");
});

// Health check route for Render
app.get("/healthz", (req, res) => {
  res.status(200).send("OK");
});

// Example endpoint to check connection
app.get("/hello", (req, res) => {
  res.json({ message: "Backend connected!" });
});

// SMTP transporter (using Gmail)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // set in Render .env
    pass: process.env.EMAIL_PASS, // set in Render .env
  },
});

// API endpoint to send email
app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: "umasai5104@gmail.com",
    subject: "New Contact Message from Your Website",
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("❌ Error sending email:", error);
      return res.status(500).json({ error: "Failed to send email" });
    } else {
      console.log("✅ Email sent:", info.response);
      return res.status(200).json({ message: "Email sent successfully" });
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
