# Express.js-сервер для проекта 'News Explorer'

Версия проекта: v1.0.0

Ресурс доступен по адресу http://hiddenplace.ru/ (IP: 84.201.181.81)

## API

`GET localhost:3000/users/me`
Возвращает информацию о пользователе (email и имя).

`GET localhost:3000/articles`
возвращает все сохранённые пользователем статьи.

`POST localhost:3000/articles`
Создаёт статью с переданными в теле keyword, title, text, date, source, link и image.

Пример запроса:

```
{
  "keyword": "Дональд Трамп",
  "title": "Выборы в Америке 2020",
  "text": "Дональд трамп снова победил на выборах президента США, переизбравшись на второй срок",
  "date": "19.11.2022",
  "source": "Медуза",
  "link": "https://meduza.io/",
  "image": "https://img.huffingtonpost.com/asset/58ac7b412900002200be9f6a.jpeg?cache=nfcw5jsypi&amp;ops=1778_1000"
}
```

`DELETE localhost:3000/articles/articleId`
Удаляет сохранённую статью  по _id.

`POST localhost:3000/signup`
Cоздаёт пользователя с переданными в теле email, password и name.

Пример запроса:

```
{
    "name": "Гордон Фриман",
    "email": "freeman@blackmesa.com",
	"password": "therightmaninthewrongplace"
}
```

`POST localhost:3000/signin`
Проверяет переданные в теле почту и пароль и возвращает JWT.


При запросе несуществующей страницы или пользователя, вернется статус `404` и сообщение об ошибке: "Запрашиваемый ресурс не найден".

## Запуск сервера

`npm run start`
Запустит сервер на `localhost:3000`.

`npm run dev`
Запустит сервер на `localhost:3000` с с хот релоудом.

## Прочие скрипты
`npm run eslint:fix`
Запустит автоматическое исправление ошибок линтером 'eslint'.
