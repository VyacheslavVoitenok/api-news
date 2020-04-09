const Article = require('../models/article');
const NotFoundError = require('../utils/errors/NotFoundError');
const AccessForbiddenError = require('../utils/errors/AccessForbiddenError');

module.exports.getArticles = (req, res, next) => {
	Article.find({})
		.then((result) => {
			if (!result) {
				throw new NotFoundError('Вы еще не сохранили ни одной статьи');
			}
			res.status(200).send({ data: result });
		})
		.catch(next);
};

module.exports.createArticle = (req, res, next) => {
	const {
		keyword, title, text, date, source, link, image,
	} = req.body;
	const ownerId = req.user._id;

	Article.create({
		keyword, title, text, date, source, link, image, owner: ownerId,
	})
		.then(() => res.status(201).send({ message: 'Новость сохранена в личный кабинет' }))
		.catch(next);
};

module.exports.deleteArticle = (req, res, next) => {
	Article.findOne({ _id: req.params.id })
		.then((result) => {
			if (!result) throw new NotFoundError('Карточки с таким id не нашлось');

			if (JSON.stringify(req.user._id) === JSON.stringify(result.owner)) {
				Article.findByIdAndRemove(req.params.id)
					.then(() => res.status(200).send({ message: 'Новость удалена из личного кабинета' }));
			} else {
				throw new AccessForbiddenError('Нельзя удалять чужие новости');
			}
		})
		.catch(next);
};
