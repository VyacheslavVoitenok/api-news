const bcrypt = require('bcryptjs');
const User = require('../models/user');
const NotFoundError = require('../utils/errors/NotFoundError');
const ConflictError = require('../utils/errors/ConflictError');
const BadRequestError = require('../utils/errors/BadRequestError');

// получить информацию о себе
module.exports.getUser = (req, res, next) => {
	User.findById(req.user._id)
		.then((user) => {
			if (!user) throw new NotFoundError('Такого пользователя не нашлось');
			res.send({ name: user.name, email: user.email });
		})
		.catch(next);
};

module.exports.createUser = async (req, res, next) => {
	const { email, password, name } = req.body;

	try {
		const user = await User.findOne({ email });
		if (user) throw new ConflictError('Пользователь с таким email уже зарегистрирован');
		if (password.length < 8) throw new BadRequestError('Длина пароля должна быть не менее 8 символов');

		const hash = await bcrypt.hash(password, 10);
		const newUser = await User.create({
			email, password: hash, name,
		});

		return res.status(201).send({
			data: {
				_id: newUser._id,
				name: newUser.name,
				about: newUser.about,
				avatar: newUser.avatar,
				email: newUser.email,
			},
		});
	} catch (error) {
		return next(error);
	}
};

