const mongoose = require("mongoose");
require("dotenv").config();

const Book = require(".?models/Book");

mongoose.connect(process.env.DATABASE_URL);

async function seed() {
    await Book.create({
        title: "goober",
        img_url: "*",
        description: "Powerful stuff."
        status: "Still at large."
    })

    console.log("made up a book.");
    mongoose.disconnect();
}

seed();