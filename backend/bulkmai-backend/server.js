const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://bulkmail_user:787673ATYTmustang@cluster0.d56ci4f.mongodb.net/bulkmail_user?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(async () => {
    console.log("✅ MongoDB connected successfully");

    const collinfo = await mongoose.connection.db
      .listCollections({ name: "authentication" })
      .next();

    if (!collinfo) {
      console.error(
        "❌ Authentication collection not found.\nRun in MongoDB shell:\n" +
          `db.createCollection("authentication")\n` +
          `db.authentication.insertOne({ user: "your@gmail.com", pass: "your-app-password" })`
      );
      process.exit(1);
    }

    const authData = await mongoose.connection.db
      .collection("authentication")
      .find()
      .toArray();

    if (!authData || authData.length === 0) {
      console.error(
        " No credentials found. h:\n"
      );
      process.exit(1);
    }

    const { user, pass } = authData[0];
    if (!user || !pass) {
      console.error("Invalid document format");
      process.exit(1);
    }

  
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    app.post("/messagesend", async (req, res) => {
      const { message, subject, emaillist } = req.body;

      if (!subject || !message || !emaillist || emaillist.length === 0) {
        return res
          .status(400)
          .send({ success: false, message: "Missing required fields" });
      }

      try {
        for (const email of emaillist) {
          await transporter.sendMail({
            from: user,
            to: email,
            subject,
            text: message,
          });
        }

        console.log(" All mails sent successfully");
        res.send({ success: true, message: "Mails sent successfully" });
      } catch (err) {
        console.error("Mail send error:", err.message);
        res
          .status(500)
          .send({ success: false, message: "Mail sending failed" });
      }
    });
  })
  .catch((err) => {
    console.error(" MongoDB connection failed:", err.message);
    process.exit(1);
  });

app.listen(8000, () => {
  console.log(" Server running on port 8000");
});

process.on("unhandledRejection", (err) => {
  console.error(" Rejection:", err.message);
});
