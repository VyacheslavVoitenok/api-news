require('dotenv').config();
const express = require('express');

const app = express();
const mongoose = require('mongoose');
const routes = require('./routes/index');
const middlewares = require('./middlewares/index');

const { PORT = 3000 } = process.env;
const { MONGO_URL = 'mongodb://localhost:27017/mestodb' } = process.env;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(MONGO_URL, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false,
	useUnifiedTopology: true,
});

app.use(middlewares); // подключили милдвары
app.use(routes); // подключили роуты

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});
