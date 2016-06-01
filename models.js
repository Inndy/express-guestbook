var path = require('path');
var Sequelize = require('sequelize');
var db = new Sequelize('sqlite://data.sqlite');
var models = {};
var bcrypt = require('bcrypt');

models.db = db;

models.Post = db.define('post', {
    'name': Sequelize.STRING,
    'msg': Sequelize.TEXT
});

models.User = db.define('user', {
	'user': Sequelize.STRING,
	'pass': Sequelize.STRING
});

db.sync().then(function () {
	models.User.findAll().then(function (users) {
		if(users.length == 0) {
			models.User.create({ // 建立預設的帳號
				'user': 'admin',
				'pass': bcrypt.hashSync('admin', 10)
			});

			console.log('Default user created. (admin / admin)');
		}
	});
});

module.exports = models;
