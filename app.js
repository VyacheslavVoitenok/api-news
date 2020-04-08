require('dotenv').config();
const app = require('express')();
const mongoose = require('mongoose');

const { PORT = 3000 } = process.env;
const { MONGO_URL = 'mongodb://localhost:27017/mestodb' } = process.env;

mongoose.connect(MONGO_URL, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false,
	useUnifiedTopology: true,
});

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});
