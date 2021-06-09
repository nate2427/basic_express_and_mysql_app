const { User } = require("../models");

const data = [
  {
    username: "nate1",
    password: "1231",
  },
  {
    username: "nate2",
    password: "1232",
  },
  {
    username: "nate3",
    password: "1233",
  },
  {
    username: "nate4",
    password: "1234",
  },
  {
    username: "nate5",
    password: "1235",
  },
  {
    username: "nate6",
    password: "1236",
  },
];

const seedData = () => {
  User.bulkCreate(data);
};

module.exports = seedData;
