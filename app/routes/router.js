const express = require("express");
const getProducts = require("./products/get");
const signUp = require("./user/sign-up");
const mainRoute = require("./main");
const getProductWithId = require("./products/getWithId");
const apiRoutes = express.Router();

apiRoutes
  .get("/", mainRoute)
  .post("/signup", signUp)
  .get("/products", getProducts)
  .get("/products/:id", getProductWithId)
  .get("/products");

module.exports = apiRoutes;
