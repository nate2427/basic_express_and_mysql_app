const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("tech_blog", "root", "password", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

module.exports = sequelize;
