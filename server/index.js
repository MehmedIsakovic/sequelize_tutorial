const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const port = 3001;
const db = require("./models");

app.use(express.json());

const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);
const commentRouter = require("./routes/Comments");
app.use("/comments", commentRouter);

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });
});
