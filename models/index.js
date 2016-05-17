var path = require('path');
var Sequelize = require('sequelize');
var db = new Sequelize('sqlite://data.sqlite');
var models = {};

models.db = db;

['post'].forEach(function(name) {
    var model = require('./' + name);
    models[name] = model(db, Sequelize);
});

db.sync();

module.exports = models;
