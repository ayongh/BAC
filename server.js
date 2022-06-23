require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

app.use(cors());
app.use(express.json());

//connect to mongoose
mongoose.connect(
  "mongodb+srv://nac2022:Xz6I5oHQwPucFteM@cluster0.rsmds.mongodb.net/nacDB?retryWrites=true&w=majority"
);

//require route
app.use("/api", require("./routes"));

if (process.env.PROD) {
  app.use(express.static(path.join(__dirname + "/my-app/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/my-app/build/index.html"));
  });
}

const port = process.env.PORT || 3001;
app.listen(port, function () {
  console.log("express server is running on port 3001");
});

//nac2022
//Xz6I5oHQwPucFteM
