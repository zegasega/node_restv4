const { DataTypes, Model} = require("sequelize");
const sequelize = require('../config/database');


class Post extends Model{}

Post.init({
    title : {
        type: DataTypes.STRING,
        allowNull: true,

    },
    description : ({
        type: DataTypes.STRING,
        allowNull: true
    }),

  sequelize,
  modelName: 'Post',
  tableName: 'posts',
  timestamps: true,
});

module.exports = Post;