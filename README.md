# TODO App

A simple full-stack todo app. You can add, edit, delete and mark todos as done.

Built with React, Express and MongoDB. The client and server are in one repo using npm workspaces.

## Requirements

- Node.js (LTS version)
- MongoDB Atlas account

## How to run

1. Install the dependencies:

   ```bash
   npm install
   ```

2. Copy `server/.env.example` to `server/.env` and add your MongoDB Atlas connection string.

3. Start the app

   ```bash
   npm run dev
   ```

The client (frontend) runs on http://localhost:5173 and the server (backend) on http://localhost:5000

## More details

- [Client README](client/README.md)
- [Server README](server/README.md)
