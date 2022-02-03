"use strict";
const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  class Article extends Sequelize.Model {}
  Article.init(
    {
      title: {
        type: Sequelize.STRING,
      },
      author: {
        type: Sequelize.STRING,
      },
      body: {
        type: Sequelize.TEXT,
      },
    },
    { sequelize }
  );
  return Article;
};
