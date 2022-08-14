"use strict";
module.exports = function (app) {
  var documentary = require("../controllers/documentary-controller");
  var category = require("../controllers/category-controller");
  // documentary Routes
  app.route("/documentary").post(documentary.create_a_documentary);
  app.route("/documentary/:documentaryId").get(documentary.read_a_documentary);
  app.route("/documentary/image/:documentaryId").get(documentary.read_image_documentary);
  app.route("/documentary/list").get(documentary.list_all_documentary);
  app.route("/documentary/list/:categoryId").get(category.list_all_documentary_by_category);

  // category Routes
  app.route("/category").get(category.list_all_category);
};
