require("./app/server");
const { port } = require("./config");
const startServer = require("./app/server");

startServer(port);
