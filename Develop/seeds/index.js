const userSeed = require("./User");
const postSeed = require("./Post");
const commentSeed = require("./Comment");
const sequelize = require("../config/connection");

const seed = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await userSeed();
  console.log("\n----- USERS SEEDED -----\n");

  await postSeed();
  console.log("\n----- POSTS SEEDED -----\n");

  await commentSeed();
  console.log("\n----- COMMENTS SEEDED -----\n");

  process.exit(0);
};

seed();
