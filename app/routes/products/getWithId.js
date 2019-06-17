const products = require("../../db/products.json");

const findProductWithId = id => products.find(product => product.id === id);

const getWithId = (req, res) => {
  const id = req.params.id;

  res.json(findProductWithId(id));
};

module.exports = getWithId;
