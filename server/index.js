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
            console.log(error);
    })
})

app.get('/api/books', (request, response) => {
    const QUERY_SELECT = "SELECT * FROM book_table";

    database.query(QUERY_SELECT, (error, result) =>{
        console.log(result);

        response.json(result);
    });
});

app.delete("/api/cows/:id", (request, response) => {
    const QUERY_DELETE = "DELETE FROM cow_tier WHERE id=" + request.params.id;
    
    database.query(QUERY_DELETE, [], (error, result) => {
        console.log(error);
    })
});


app.put('/api/cows', (request, response) =>{
    const QUERY_UPDATE = "UPDATE cow_tier SET favoriteSnack=?, milkProduction=? WHERE cowName=?";
    const VALUES = [request.body.newFavoriteSnack, request.body.newMilkProduction, request.body.cowName];
    
    database.query(QUERY_UPDATE, VALUES, (error, result) => {
        console.log(error);
    })
});

app.listen(3005, () => {
    console.log("Server started");
});