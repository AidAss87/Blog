
# Gate Blog Backend API

Это сервер API для блога, который обслуживает данные постов и изображения. Сервер предоставляет маршруты для получения всех постов или конкретного поста по его `id`. Все данные загружаются из файла `data.json`, а изображения доступны через статический маршрут `/images`.

## Доступные маршруты

### Получить все посты

- **URL**: `https://std.bit-camp.ru/blog/post`
- **Метод**: `GET`
- **Описание**: Возвращает список всех постов с возможностью сортировки и фильтрации.
- **Параметры запроса (Query Parameters)**:
  - `sortBy` (string, необязательный): Позволяет сортировать результаты.
    - `date` - сортировка по дате создания (новые сверху).
    - `reads` - сортировка по количеству просмотров.
  - `tag` (string, необязательный): Фильтрация постов по конкретному тегу (например, `action`).

**Примеры запросов**:
- `GET https://std.bit-camp.ru/blog/post?sortBy=date` - сортировка по дате создания.
- `GET https://std.bit-camp.ru/blog/post?sortBy=reads` - сортировка по количеству просмотров.
- `GET https://std.bit-camp.ru/blog/post?tag=drama` - фильтрация по тегу `drama`.
- `GET https://std.bit-camp.ru/blog/post?sortBy=reads&tag=action` - комбинированный запрос: сортировка по просмотрам с фильтрацией по тегу `action`.

**Пример ответа**:

```json
[
  {
    "id": "1",
    "title": "Attack on Titan",
    "reads": 1000000,
    "stars": 5,
    "dateOfCreate": "2023-10-01",
    "tags": ["action", "drama", "military", "history"],
    "content": "Описание поста...",
    "imageUrl": "https://std.bit-camp.ru/images/attack-on-titan.jpg",
    "chapters": [
      {
        "title": "Глава 1 - Падение Шиганшины",
        "content": "Описание главы...",
        "stars": 5
      }
    ]
  }
]
```

### Получить конкретный пост по `id`

- **URL**: `https://std.bit-camp.ru/blog/post/:id`
- **Метод**: `GET`
- **Описание**: Возвращает данные конкретного поста по его `id`.
- **Параметры**:
  - `id` (string): ID поста, который нужно получить.

**Пример запроса**:

```
GET https://std.bit-camp.ru/blog/post/1
```

**Пример ответа**:

```json
{
  "id": "1",
  "title": "Attack on Titan",
  "reads": 1000000,
  "stars": 5,
  "dateOfCreate": "2023-10-01",
  "tags": ["action", "drama", "military", "history"],
  "content": "Описание поста...",
  "imageUrl": "https://std.bit-camp.ru/images/attack-on-titan.jpg",
  "chapters": [
    {
      "title": "Глава 1 - Падение Шиганшины",
      "content": "Описание главы...",
      "stars": 5
    }
  ]
}
```

## Статические файлы

- **URL для изображений**: `https://std.bit-camp.ru/images`
- Изображения хранятся в директории `public/images` и доступны по прямым ссылкам, например `https://std.bit-camp.ru/images/your-image.jpg`.

## Настройка CORS

Сервер использует `cors`, чтобы разрешить запросы с любого источника. Если требуется ограничить источники, настройте параметры `cors` в `server.js`.

## Структура проекта

- **server.js**: основной файл сервера.
- **public/images**: папка, где хранятся изображения для постов.
- **data.json**: файл с данными постов.

## Пример работы с API на клиенте

```javascript
// Получение всех постов с сортировкой по количеству просмотров и фильтрацией по тегу
fetch("https://std.bit-camp.ru/blog/post?sortBy=reads&tag=action")
  .then((response) => response.json())
  .then((data) => console.log(data));

// Получение конкретного поста по ID
fetch("https://std.bit-camp.ru/blog/post/1")
  .then((response) => response.json())
  .then((data) => console.log(data));
```

## Примечания

- Убедитесь, что файлы изображений находятся в директории `public/images` и доступны для чтения сервером.
- Путь до изображений формируется динамически в зависимости от запроса, поэтому в ответах будут использоваться реальные URL, такие как `https://std.bit-camp.ru/images/your-image.jpg`.