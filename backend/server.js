const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/userRoutes");
const authRouter = require("./routes/authRoutes");
const bodyParser = require("body-parser");
const app = express();
const port = 3300;
const dbConn = require("./utils/db-conn");
dbConn().catch(console.dir);
app.get("/", (req, res) => {
  res.send("Hello user,welcome to my server");
});
app.use(cors());
app.use(bodyParser.json());
app.use("/users/", userRouter);
app.use("/auth/", authRouter);
app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
