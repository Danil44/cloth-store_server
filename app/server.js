const http = require("http");
const url = require("url");
const router = require("./routes/router");

const morgan = require("morgan");
const logger = morgan("combined");

const requestHandler = (req, res) => {
  const parsedUrl = url.parse(req.url);
  const func = router[parsedUrl.pathname] || router.default;

  logger(req, res, () => func(req, res));
};

const startServer = port => {
  const server = http.createServer(requestHandler);

  server.listen(port, err => {
    if (err) {
      return console.log("smth goes wrong", err);
    }
    console.log(`server is listening on ${port}`);
  });
};

module.exports = startServer;
