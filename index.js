const express = require("express");
const cor = require("cors");
const post_route = require("./routes/post");
require("dotenv").config();
require("./dbConfig/index");
const app = express();

app.use(express.json());
app.use(cor());

app.use("/", post_route);

const port = process.env.PORT;

app.listen(port, () => {
  try {
    console.log(`server is running on ${port}`);
  } catch (error) {
    console.log(error);
  }
});
