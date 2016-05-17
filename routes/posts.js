var express = require('express');
var router = express.Router();

// list posts
router.get('/', function(req, res, next) {
    var posts = [
        { name: 'Inndy', msg: 'Hello, World!' },
        { name: 'NTUST', msg: '＼118／＼118／＼118／＼118／＼118／' }
    ];
    res.render('posts', { title: '留言列表', posts: posts });
});

router.get('/new', function(req, res, next) {
    res.render('new_post', { 'title': '新增留言' });
});

router.post('/new', function(req, res, next) {
    res.send('you have sent your message!');
});

module.exports = router;
