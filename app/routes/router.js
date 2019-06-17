const getAllProducts = require("./products/getAll");
const signUp = require("./user/sign-up");
const mainRoute = require("./main");

const router = {
  "/products": getAllProducts,
  "/signup": signUp,
  default: mainRoute
};

module.exports = router;
