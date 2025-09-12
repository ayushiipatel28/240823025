const express = require("express");
const mongoose = require("mongoose");

const studentRoute = require("./routes/studentRoute");
const app = express();
const PORT = 3000;
app.use(express.json());

mongoose.connect(
  "mongodb+srv://ayushigondha_db_user:12345@cluster0.tdzwa6b.mongodb.net/ayushi",
  {
    
  }
);

app.use("/song", studentRoute);

app.listen(PORT, () => {
  console.log("server is running : 127.0.0.1" + PORT);
});