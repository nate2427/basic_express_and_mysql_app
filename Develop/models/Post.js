const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create Post Model
class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "post",
    freezeTableName: true,
    underscored: true,
    timestamps: false,
  }
);

module.exports = Post;
// Agent pid 4749
