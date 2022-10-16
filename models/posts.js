'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Posts.init({
    postId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      required: true,
    },
    title: {
      type: DataTypes.STRING,
      required: true,
    },
    content: {
      type: DataTypes.STRING,
    },
    nickname: {
      type: DataTypes.STRING,
      required: true,
    },
    password: {
      type: DataTypes.STRING,
      required: true,
    },
  }, {
    sequelize,
    modelName: 'Posts',
  });
  return Posts;
};