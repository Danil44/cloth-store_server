const express = require("express");
const app = express();
const router = require("./routes/router");
const morgan = require("morgan");
const logger = morgan("dev");

const errorHandler = (err, req, res, next) => {
  res.status(500).send("Error found: ", err);
};

const startServer = port => {
  app
    .use(logger)
    .use("/", router)
    .use(errorHandler);

  app.listen(port, err => {
    if (err) {
      return console.log(err);
    }
    console.log(`server is listening on ${port}`);
  });
};

module.exports = startServer;
