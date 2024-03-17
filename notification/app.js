const express = require("express");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();
const ejs = require("ejs");
const app = express();

const port = process.env.PORT || 5006;

app.use(express.json());

app.get("/notification/send-email", (req, res) => {
  res.send("Notification API");
});

app.post("/notification/send-email", async (req, res) => {
  try {
    const { to, subject, templateType, data } = req.body;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    let file = "";
    let folder = "templates";

    if (templateType == "donation") {
      file = folder + "/defaultTemplate.ejs";
    } else if ((templateType == "donationPending")) {
      file = folder + "/donationPendingTemplate.ejs";
    } else {
      file = folder + "/donationConfirmedTemplate.ejs";
    }

    const template = await ejs.renderFile(file, data);

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: to,
      subject: subject,
      html: template,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to send email",
    });
  }
});

app.listen(port, () => {
  console.log(`Notification Server is running on port ${port}`);
});
