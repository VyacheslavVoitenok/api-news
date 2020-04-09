const router = require('express').Router();
const users = require('./users');
const articles = require('./articles');
const registration = require('./registration');
const authorization = require('./authorization');
const errorHandler = require('../middlewares/errorHandler');
const { requestLogger, errorLogger } = require('../middlewares/logger');
const { errors } = require('celebrate');

router.use(requestLogger);

router.use('/signup', registration);
router.use('/signin', authorization);
router.use('/users', users);
router.use('/articles', articles);

router.use(errorLogger);
router.use(errors());
router.use(errorHandler);

module.exports = router;
