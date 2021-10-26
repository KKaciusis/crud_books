const express = require('express');
const multer = require('multer');
const cors = require('cors');
const { request } = require('express');
const fileSystem = require("fs");

const app = express();
const mysql = require('mysql');
const dotenv = require('dotenv');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

dotenv.config();

// @TODO: Handle errors and return response
// @TODO: Move /api/cows to different folder to be able to easily add new endpoints (research import options (maybe recursively))
// @TODO: Move pictureUpload and database to common .js file

const database = mysql.createPool({
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
});


app.post('/api/books', (request, response) => {

        const QUERY_INSERT = "INSERT INTO book_table (title, author, category, pages) VALUES (?, ?, ?, ?)";
        const VALUES = [request.body.title, request.body.author, request.body.category, request.body.pages];
        console.log(request.body)
        
        database.query(QUERY_INSERT, VALUES, (error, result) => {
            response.send(result);
    })
})

app.get('/api/books', (request, response) => {
    const QUERY_SELECT = "SELECT * FROM book_table";

    database.query(QUERY_SELECT, (error, result) =>{
        response.send(result);
    })
});

app.get('/api/books/count', (request, response) => {
    const QUERY_SELECT = "SELECT COUNT(id) AS booksCount FROM book_table";

    database.query(QUERY_SELECT, (error, result) =>{
        response.send(result);
    })
});

app.get('/api/books/cat-count', (request, response) => {
    const QUERY_SELECT = `SELECT COUNT(id) AS count, category FROM book_table GROUP BY category ORDER BY COUNT(id) DESC`;

    database.query(QUERY_SELECT, (error, result) =>{
        response.send(result);
    })
});

app.delete("/api/books:id", (request, response) => {
    const QUERY_DELETE = "DELETE FROM book_table WHERE id=" + request.params.id;
    
    database.query(QUERY_DELETE, [], (error, result) => {
        response.send(result);
    })
});


app.put('/api/books:id', (request, response) =>{
    const QUERY_UPDATE = "UPDATE book_table SET title = ?, author = ?, category = ?, pages = ? WHERE id=" + request.params.id;
    const VALUES = [request.body.title, request.body.author, request.body.category, request.body.pages];
    
    database.query(QUERY_UPDATE, VALUES, (error, result) => {
        response.send(result)
    })
});

app.listen(3005, () => {
    console.log("Server started");
});