const router = require('express').Router();
const { login } = require('../controllers/login');
const { celebrate } = require('celebrate');
const loginObj = require('../celebrate-objects/loginObj')

router.post('/', celebrate(loginObj), login);

module.exports = router;
