const router = require('express').Router();
const { getArticles, createArticle, deleteArticle } = require('../controllers/articles');
const { celebrate } = require('celebrate');
const createArticleObj = require('../celebrate-objects/createArticle');
const idObj = require('../celebrate-objects/idObj');
const auth = require('../middlewares/auth');

router.get('/', auth, getArticles);
router.post('/', auth, createArticle);
router.delete('/:id', auth, celebrate(idObj), deleteArticle);

module.exports = router;

//celebrate(createArticleObj)
