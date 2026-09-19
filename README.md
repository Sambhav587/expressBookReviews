# Book Review Application

A RESTful Book Review Application built with Node.js and Express.js.

This project provides public book browsing APIs, user registration and login, and protected review operations. Authentication is handled using JWT and Express sessions.

## Features

- User registration
- User login with JWT authentication
- Session-based authentication
- Get all books
- Get a book by ISBN
- Search books by author
- Search books by title
- Get reviews for a book
- Add or update a book review
- Delete a user's review
- Axios-based asynchronous book queries
- RESTful API architecture

## Tech Stack

- Node.js
- Express.js
- JavaScript
- Axios
- JSON Web Tokens (JWT)
- Express Session
- REST API
- Git & GitHub

## API Endpoints

### Public Book APIs

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Get all books |
| GET | `/isbn/:isbn` | Get book by ISBN |
| GET | `/author/:author` | Get books by author |
| GET | `/title/:title` | Get books by title |
| GET | `/review/:isbn` | Get reviews for a book |

### Authentication APIs

| Method | Endpoint | Description |
|---|---|---|
| POST | `/register` | Register a new user |
| POST | `/customer/login` | Login and receive an access token |

### Protected Review APIs

| Method | Endpoint | Description |
|---|---|---|
| PUT | `/customer/auth/review/:isbn` | Add or update a review |
| DELETE | `/customer/auth/review/:isbn` | Delete a review |

## Project Structure

```text
final_project/
├── index.js
├── package.json
├── package-lock.json
├── router/
│   ├── auth_users.js
│   ├── general.js
│   └── booksdb.js
├── .gitignore
└── README.md
```

## How to Run

Clone the repository:

```bash
git clone https://github.com/Sambhav587/expressBookReviews.git
```

Move into the project:

```bash
cd expressBookReviews/final_project
```

Install dependencies:

```bash
npm install
```

Start the server:

```bash
node index.js
```

The application runs on:

```text
http://localhost:5000
```

## Example Requests

Get all books:

```bash
curl http://localhost:5000/
```

Get a book by ISBN:

```bash
curl http://localhost:5000/isbn/1
```

Search by author:

```bash
curl "http://localhost:5000/author/Chinua%20Achebe"
```

Search by title:

```bash
curl "http://localhost:5000/title/Things%20Fall%20Apart"
```

Get reviews:

```bash
curl http://localhost:5000/review/1
```

## Authentication

The application uses JWT-based authentication together with Express sessions.

After successful login, the server generates an access token. Protected review operations require an authenticated session.

## Axios Async Operations

The application also includes Axios-based asynchronous functions for:

- Getting all books
- Getting a book by ISBN
- Getting books by author
- Getting books by title

These functions demonstrate both `async/await` and Promise-based approaches.

## Learning Outcomes

This project demonstrates practical backend development concepts including:

- Express.js routing
- REST API development
- Middleware
- User authentication
- JWT tokens
- Express sessions
- Review add/update/delete operations
- Axios and asynchronous JavaScript
- Error handling
- Git and GitHub workflow

## Author

**Sambhav**

GitHub:  
https://github.com/Sambhav587
