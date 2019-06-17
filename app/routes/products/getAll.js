const allProducts = require("../../db/products.json");

const getAll = (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify(allProducts));
  res.end();
};
module.exports = getAll;
