const router = require('express').Router();
const users = require('./users');
// const articles = require('./articles');
const registration = require('./registration');
const authorization = require('./authorization');
const errorHandler = require('../middlewares/errorHandler');

router.use('/signup', registration);
router.use('/signin', authorization);
router.use('/users', users);
router.use(errorHandler);

module.exports = router;
