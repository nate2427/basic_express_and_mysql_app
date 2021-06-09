const { Comment } = require("../models");

const data = [
  {
    user_id: 2,
    post_id: 1,
    content: "This is a comment!",
  },
  {
    user_id: 1,
    post_id: 1,
    content: "This is the 2nd comment!",
  },
  {
    user_id: 3,
    post_id: 2,
    content: "This is a comment!",
  },
  {
    user_id: 4,
    post_id: 2,
    content: "This is a comment!",
  },
  {
    user_id: 6,
    post_id: 3,
    content: "This is a comment!",
  },
];

const seedData = () => {
  Comment.bulkCreate(data);
};

module.exports = seedData;
