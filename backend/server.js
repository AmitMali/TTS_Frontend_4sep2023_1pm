const express = require("express");
const userRouter = require("./routes/userRoutes");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3300;
app.get("/", (req, res) => {
  res.send("Hello user,welcome to my server");
});
app.use(cors());
app.use(bodyParser.json());
app.use("/users/", userRouter);
app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
