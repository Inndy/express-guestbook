var express = require('express');
var router = express.Router();
var models = require('../models');
var bcrypt = require('bcrypt');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/logout', function(req, res, next) {
	req.session.destroy();
	res.redirect('/posts');
});

router.get('/login', function(req, res, next) {
	res.render('login_form', { title: '登入管理'});
});

router.post('/login', function(req, res, next) {
	models.User.findOne({
		where: {
			user: req.body.user
		}
	}).then(function(user) {
		if(user && bcrypt.compareSync(req.body.pass, user.pass)) {
			req.session.admin = 1;
			res.redirect('/posts');
		} else {
			res.send('登入失敗');
		}
	});
});

module.exports = router;
