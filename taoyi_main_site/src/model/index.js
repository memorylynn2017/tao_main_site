// 一个连接数据库的示例demo,你无需关心，只是示范一下这里写类JSON数据的

// 注意这里只是示范，以后在这里写mock.json就可以了。。不会模拟数据只能自己手工书写多个json文件放置在这里，
// 模拟数据的方法及详情请到http://mockjs.com/研究规则.

// var base = require("base");
// var fs = require("fs");
// var path = require("path");
// var Sequelize = require("sequelize");

// var service_config = base.get_config();
// var db_config = service_config.db_config;

// var sequelize = new Sequelize(
//   db_config.database,
//   db_config.username,
//   db_config.password,
//   db_config
// );

// var db = {};

// fs
//   .readdirSync(__dirname)
//   .filter(function(file) {
//     return file.indexOf(".") !== 0 && file !== "index.js";
//   })
//   .forEach(function(file) {
//     var model = sequelize.import(path.join(__dirname, file));
//     db[model["name"]] = model;
//   });

// Object.keys(db).forEach(function(modelName) {
//   if ("associate" in db[modelName]) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;
