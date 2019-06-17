const path = require("path");
const qs = require("querystring");
const fs = require("fs");

const { promisify } = require("util");

const writeFile = promisify(fs.writeFile);

const saveUser = user => {
  const username = user.username;
  const pathName = path.resolve(
    __dirname,
    "../../db/",
    `users/${username}.json`
  );

  return writeFile(pathName, JSON.stringify(user), err => {
    if (err) throw err;
  });
};

const signUp = (req, res) => {
  if (req.method === "POST") {
    let body = "";

    req.on("data", data => {
      body = body + data;
    });

    req.on("end", () => {
      const userData = JSON.parse(body);

      saveUser(userData)
        .then(() => {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.write(JSON.stringify(userData));
          res.end();
        })
        .catch(err => console.log(err));
    });
  }
};

module.exports = signUp;
