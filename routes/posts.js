var express = require('express');
var router = express.Router();
var models = require('../models');

// list posts
router.get('/', function(req, res, next) {
    models.Post.findAll().then(function(posts) {
        res.render('posts', { title: '留言列表', posts: posts });
    });
});

router.get('/new', function(req, res, next) {
    res.render('new_post', { 'title': '新增留言' });
});

router.post('/new', function(req, res, next) {
    models.Post.create(req.body);
    res.redirect('/posts');
});

router.get('/delete/:id', function(req, res, next) {
	var post_id = req.params.id;
	models.Post.destroy({
		where: {
			id: post_id
		}
	}).then(function() {
		res.redirect('/posts');
	});
});

module.exports = router;
