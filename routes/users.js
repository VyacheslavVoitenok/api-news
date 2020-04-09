const router = require('express').Router();
const { getUser, createUser } = require('../controllers/users');


router.get('/me', getUser);
router.post('/', createUser);

module.exports = router;
