const express = require('express');
const axios = require('axios');

let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;

const public_users = express.Router();


// Register a new user
public_users.post("/register", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (!username || !password) {
        return res.status(400).json({
            message: "Username and password are required"
        });
    }

    if (isValid(username)) {
        return res.status(409).json({
            message: "User already exists"
        });
    }

    users.push({
        username: username,
        password: password
    });

    return res.status(200).json({
        message: "User registered successfully"
    });
});


// Get the book list available in the shop
public_users.get('/', function (req, res) {
    return res.status(200).json(books);
});


// Get book details based on ISBN
public_users.get('/isbn/:isbn', function (req, res) {
    const isbn = req.params.isbn;

    if (!books[isbn]) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    return res.status(200).json(books[isbn]);
});


// Get book details based on author
public_users.get('/author/:author', function (req, res) {
    const author = req.params.author;

    const result = Object.values(books).filter(
        (book) => book.author.toLowerCase() === author.toLowerCase()
    );

    return res.status(200).json(result);
});


// Get all books based on title
public_users.get('/title/:title', function (req, res) {
    const title = req.params.title;

    const result = Object.values(books).filter(
        (book) => book.title.toLowerCase() === title.toLowerCase()
    );

    return res.status(200).json(result);
});


// Get book review
public_users.get('/review/:isbn', function (req, res) {
    const isbn = req.params.isbn;

    if (!books[isbn]) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    return res.status(200).json(books[isbn].reviews);
});


// Task 10 - Get all books using Axios and async/await
async function getAllBooks() {
    try {
        const response = await axios.get('http://localhost:5000/');
        return response.data;
    } catch (error) {
        throw error;
    }
}


// Task 11 - Get book details by ISBN using Axios and Promise
function getBookByISBN(isbn) {
    return axios
        .get(`http://localhost:5000/isbn/${isbn}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw error;
        });
}


// Task 12 - Get book details by Author using Axios and Promise
function getBooksByAuthor(author) {
    return axios
        .get(`http://localhost:5000/author/${encodeURIComponent(author)}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw error;
        });
}


// Task 13 - Get book details by Title using Axios and Promise
function getBooksByTitle(title) {
    return axios
        .get(`http://localhost:5000/title/${encodeURIComponent(title)}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw error;
        });
}


module.exports.general = public_users;
module.exports.getAllBooks = getAllBooks;
module.exports.getBookByISBN = getBookByISBN;
module.exports.getBooksByAuthor = getBooksByAuthor;
module.exports.getBooksByTitle = getBooksByTitle;