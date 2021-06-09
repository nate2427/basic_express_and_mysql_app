const User = require("./User");
const Comment = require("./Comment");
const Post = require("./Post");

// create associations

// User has many post and the association is thru the post's user_id
User.hasMany(Post, {
  foreignKey: "user_id",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
});

// Post
Post.hasMany(Comment, {
  foreignKey: "post_id",
});
// Post belongs to User thru its FK user_id
Post.belongsTo(User, {
  foreignKey: "user_id",
});

// Comment
Comment.belongsTo(User, {
  foreignKey: "user_id",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
});

module.exports = { User, Comment, Post };
