# TODO App - Server (Backend)

The backend of the TODO app, built with Express and MongoDB. It provides a REST API for creating, reading, updating and deleting todos.

## Requirements

- Node.js 20.6 or later
- MongoDB Atlas account or a local MongoDB installation

## How to run

1. Install the dependencies from the project root:

   ```bash
   npm install
   ```

2. Copy `server/.env.example` to `server/.env` and add your MongoDB connection string.

3. Start the server from the project root:

   ```bash
   npm run dev -w server
   ```

The server runs on http://localhost:5000

To run it without restarting on file changes, use `npm start -w server`.

## Environment variables

| Name        | Description               | Default |
| ----------- | ------------------------- | ------- |
| `PORT`      | Port the server runs on   | `5000`  |
| `MONGO_URI` | MongoDB connection string | None    |

`MONGO_URI` is required. The server exits if it can't connect to MongoDB.

## MongoDB connection notes

The server connects using `MONGO_URI` in `server/.env`. You can use either option:

- **MongoDB Atlas:** create a cluster and a database user, add your IP address under Network Access, then copy the connection string into `MONGO_URI`.
- **Local MongoDB:** start MongoDB on your computer and use a connection string like this:

  ```text
  MONGO_URI=mongodb://127.0.0.1:27017/todo
  ```

## Assumptions and limitations

- CORS is open to all origins, which is fine for development but should be restricted in production
- The server needs a `.env` file to start because the `dev` and `start` scripts load it
- There are no automated tests

## API

The base URL is `http://localhost:5000/api/todos`

| Method   | Path        | Description                   | Success status |
| -------- | ----------- | ----------------------------- | -------------- |
| `GET`    | `/`         | Get all todos, newest first   | `200`          |
| `POST`   | `/`         | Create a todo                 | `201`          |
| `PUT`    | `/:id`      | Update a title or description | `200`          |
| `PATCH`  | `/:id/done` | Toggle a todo's done status   | `200`          |
| `DELETE` | `/:id`      | Delete a todo                 | `200`          |

### Request body

`POST` and `PUT` accept a JSON body:

```json
{
  "title": "Test title",
  "description": "Test description"
}
```

| Field         | Type   | Rules                                                 |
| ------------- | ------ | ----------------------------------------------------- |
| `title`       | String | Required when creating a todo, 100 characters or less |
| `description` | String | Optional, 500 characters or less                      |

### Todo object

```json
{
  "_id": "665f1c2e8a4b2c0012345678",
  "title": "Test title",
  "description": "Test description",
  "done": false,
  "createdAt": "2026-10-30T09:00:00.000Z",
  "updatedAt": "2026-10-30T09:00:00.000Z",
  "__v": 0
}
```

`GET /` returns an array of todos. `POST`, `PUT` and `PATCH` return a single todo. `DELETE` returns:

```json
{
  "message": "Todo deleted",
  "id": "665f1c2e8a4b2c0012345678"
}
```

### Errors

Errors are returned as JSON with a `message` field:

```json
{
  "message": "Title is required"
}
```

| Status | When it happens                                 |
| ------ | ----------------------------------------------- |
| `400`  | The data is invalid or the todo id is not valid |
| `404`  | The todo or route does not exist                |
| `500`  | Something went wrong on the server              |

## Project structure

```text
server/
├── src/
│   ├── config/db.js                   # MongoDB connection
│   ├── controllers/todo.controller.js # Route logic
│   ├── middleware/errorHandler.js     # Error responses
│   ├── models/Todo.js                 # Todo schema
│   ├── routes/todo.routes.js          # API routes
│   ├── app.js                         # Express setup
│   └── index.js                       # Server entry point
├── .env.example
└── package.json
```
