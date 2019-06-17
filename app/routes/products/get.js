const allProducts = require("../../db/products.json");
const qs = require("querystring");

const removeQuotes = str => str.replace(/['"]+/g, "");

const removeWhiteSpace = str => str.replace(/\s/g, "");

const editQuery = str => removeQuotes(removeWhiteSpace(str));

const getWithIds = async ids => {
  return await allProducts.filter(product => ids.includes(product.id));
};

const getProducts = (req, res) => {
  const { query } = req;
  const isQueryEmpty = Object.entries(query).length === 0;

  if (isQueryEmpty) {
    return res.json({ products: allProducts });
  } else {
    const ids = editQuery(query.ids).split(",");

    return getWithIds(ids)
      .then(data => res.json(data))
      .catch(err => console.log(err));
  }
};

module.exports = getProducts;
