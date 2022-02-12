# Fullstack App
- Backend: Node Js API
- Frontend: React, React Router, Redux, Redux Thunk, React-Bootstrap, Sass 

## Run the app

### Option 1: Run each service individually
```bash
./books-backend/npm start
```
```bash
./books-frontend/npm start
```

### Option 2: docker-compose
You can bring up the whole stack by simply running:
```bash
docker-compose up
```

### API Endpoints
The API is located at `localhost:4000`

| HTTP method  | Endpoint  | Payload Sample |
| --- | --- | --- |
| GET  | /books  | N/A |
| POST  | /books  | {"name": "Some Name", "author": "Some Author", "publishingYear": 2000, "isbnNumber": 1982112395 } |
| PUT  | /books/book_id  | {"name": "Some Name", "author": "Some Author", "publishingYear": 2000, "isbnNumber": 1982112395 } |
| DELETE  | /books/book_id  | N/A |

### Client
The React client is located at `localhost:3000`