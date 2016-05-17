var express = require('express');
var router = express.Router();

// list posts
router.get('/', function(req, res, next) {
    res.send('posts here!');
});

router.get('/new', function(req, res, next) {
    res.send('post form here!');
});

router.post('/new', function(req, res, next) {
    res.send('you have sent your message!');
});

module.exports = router;
