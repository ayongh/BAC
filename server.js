const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

//connect to mongoose
mongoose.connect(
  "mongodb+srv://nac2022:Xz6I5oHQwPucFteM@cluster0.rsmds.mongodb.net/nacDB?retryWrites=true&w=majority"
);

//require route
app.use("/", require("./routes"));

app.listen(3001, function () {
  console.log("express server is running on port 3001");
});

//nac2022
//Xz6I5oHQwPucFteM
