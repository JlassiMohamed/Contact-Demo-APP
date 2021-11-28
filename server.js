const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const router = require("./routes/userRoute");

const app = express();

connectDB();

const port = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV;

app.use(express.json());
app.use("/api/users", router);

// if ((process.env.NODE_ENV = "production")) {
//   app.use(express.static("client/build"));
//   const path = require("path");
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }
const path = require("path");
// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "client/build")));
// Anything that doesn't match the above, send back index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(port, (err) => {
  err ? console.log(err) : console.log(`app listening on port ${port}`);
});
