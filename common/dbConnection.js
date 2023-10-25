const configure = require("../configure");
const config = require("../configure");
const { Sequelize } = require("sequelize");

var database = new Sequelize(configure.db);
database
  .authenticate()
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = database;
