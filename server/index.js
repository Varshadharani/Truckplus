const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors(
  {
  origin: "https://truckplus.vercel.app",
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
  }
));
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.get("/", (req, res) => {
  res.send("🚚 TruckPlus Backend is Running");
});

app.post("/api/contact", async (req, res) => {
    console.log("📥 Request received:", req.body); // ✅ add this to debug

  const { name, email, phone, address, subject, company, companyEmail, message } = req.body;

  const mailToOwner = {
    from: `"TruckPlus Website" <${process.env.EMAIL_USER}>`,
    to: process.env.OWNER_EMAIL,
    subject: `New Contact Submission: ${subject}`,
    html: `
      <h3>New Message from Contact Form</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Company Email:</strong> ${companyEmail}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>Message:</strong><br>${message}</p>
    `
  };

  const autoReplyToUser = {
    from: `"TruckPlus" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Thanks for contacting TruckPlus",
    html: `
      <p>Hi ${name},</p>
      <p>Thanks for reaching out to TruckPlus Logistics! We’ve received your message and will get back to you shortly.</p>
      <p>Regards,<br/>TruckPlus Team</p>
    `,
  };

  try {
    await transporter.sendMail(mailToOwner);
    await transporter.sendMail(autoReplyToUser);
    res.status(200).json({ success: true, message: "Emails sent successfully." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Failed to send emails." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
