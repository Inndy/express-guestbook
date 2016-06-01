var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
	res.render('login_form', { title: '登入管理'});
});

router.post('/login', function(req, res, next) {
	if(req.body.user == 'admin' && req.body.pass == 'admin') {
		res.send('你登入成功！');
	} else {
		res.send('你登入失敗...');
	}
});

module.exports = router;
