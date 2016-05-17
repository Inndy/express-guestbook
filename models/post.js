module.exports = function(db, Sequelize) {
    return db.define('post', {
        'name': Sequelize.STRING,
        'msg': Sequelize.TEXT
    });
};
