const router = require('express').Router();
const users = require('./users');
const registration = require('./registration');
const errorHandler = require('../middlewares/errorHandler');

router.use('/users/me', users);
router.use('/signup', registration);
router.use(errorHandler);

module.exports = router;
