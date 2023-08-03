const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const Book = require("./models/Book");
const bp = require("body-parser");

const app = express();
app.use(cors());
app.use(bp.json());

mongoose.connect(process.env.DATABASE_URL).then(() => console.log ("DB Connected"))

const PORT = process.env.PORT || 8001

app.get('/', (request, response) => {
    response.status(200).json({welcome: "WOOT WOOT!!!"});
})

// CRUD: READ:

app.get('/movies', async (request,response) => {
    console.log(request)
    try {
        const movies = await Movie.find()
        response.status(200).json(movies)
    } catch (err) {
        console.log(err)
        response.status(404).json(err)
    }
})

// CRUD : Create 
app.post('/movies', async(request, response) => {
    try {
        const newMovie = await Movie.create(request.body)
        response.status(200).json(newMovie)
    } catch (error) {
        response.status(500).json(error)
    }
})

// UPDATE -> 

app.put('/movies/:id', async  (request, response) => {
    console.log(request.params.id);
    try {
        await Movie.findByIdAndUpdate(request.params.id, request.body);
        response.status(204).send()
    } catch (err) {
        response.send(err)
    }
})

// GET REQUEST  /movies/123,
// app.get("/movies/:id", async (request, response) => {
//     console.log(request);
//     const theCat = await Movie.find({ _id: request.params.id });
//     response.json(theCat);
//   });


// CRUD: DELETE

app.delete('/movies/:id' , async (request, response) => {
    console.log(request)
    try {
        const id = request.params.id;
        console.log(id)
        const deletedMovie = await Movie.findByIdAndDelete(id)
        response.status(200).json(deletedMovie)
    } catch (err) {
        response.status(500).json(err)
    }
})
// listening to port 

app.listen(PORT, () => console.log(`Listening to port: ${PORT}`))