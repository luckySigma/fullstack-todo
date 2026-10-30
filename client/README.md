# TODO App - Client (Frontend)

The frontend of the TODO app, built with React and Vite. You can add, edit, delete and mark todos as done.

## Requirements

- Node.js (LTS version)
- The server running on port 5000 (see the [server README](../server/README.md))

## How to run

1. Install the dependencies from the project root:

   ```bash
   npm install
   ```

2. Start the client and server together from the project root:

   ```bash
   npm run dev
   ```

   To start only the client:

   ```bash
   npm run dev -w client
   ```

3. Open http://localhost:5173

The server needs to be running to load todos.

## Scripts

Run these from the project root:

| Command                     | Description                  |
| --------------------------- | ---------------------------- |
| `npm run dev -w client`     | Start the development server |
| `npm run build -w client`   | Build the app for production |
| `npm run preview -w client` | Preview the production build |
| `npm run lint -w client`    | Check the code with ESLint   |

## How it connects to the server

The client sends its requests to `/api`. In development, Vite forwards them to the server at http://localhost:5000

Requests time out after 10 seconds. If a request fails, the app shows the server's error message, or "Something went wrong" if there isn't one.

## Project structure

```text
client/
├── src/
│   ├── apis/todos.js            # API requests
│   ├── components/
│   │   ├── TodoForm.jsx         # Form for adding a todo
│   │   ├── TodoItem.jsx         # Single todo, including edit mode
│   │   └── TodoList.jsx         # List of todos
│   ├── hooks/useTodos.js        # Todo state and actions
│   ├── App.jsx                  # Main page
│   ├── index.css                # Styles
│   └── main.jsx                 # App entry point
├── index.html
├── package.json
└── vite.config.js
```

## Assumptions and limitations

- The server is expected to run on port 5000. If you change the port, update the proxy in `vite.config.js`
- The proxy only works in development
