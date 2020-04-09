const router = require('express').Router();
const { celebrate } = require('celebrate');
const { getUser } = require('../controllers/users');
const auth = require('../middlewares/auth');
const idObj = require('../celebrate-objects/idObj')

router.get('/me', auth, celebrate(idObj), getUser);

module.exports = router;
