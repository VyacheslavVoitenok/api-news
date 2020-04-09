const jwt = require('jsonwebtoken');
const NotAuthorizedError = require('../utils/errors/NotAuthorizedError');
const secretKey = require('../utils/secretKey');

const auth = (req, res, next) => {
	const { authorization } = req.headers;

	if (!authorization || !authorization.startsWith('Bearer ')) {
		throw new NotAuthorizedError('Необходимо авторизоваться');
	}

	const token = authorization.replace('Bearer', '');
	let payload;

	try {
		payload = jwt.verify(token, secretKey);
	} catch (error) {
		return next(new NotAuthorizedError('Необходимо авторизоваться'));
	}

	req.user = payload;
	return next();
};

module.exports = auth;
