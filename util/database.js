const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "nodecomplete", {
  dialect: "mysql2",
  host: "localhost",
});

module.exports = sequelize;
