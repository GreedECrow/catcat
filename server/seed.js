const mongoose = require("mongoose");
require("dotenv").config();

const Book = require(".?models/Book");

mongoose.connect(process.env.DATABASE_URL);

async function seed() {
    await Book.create({
        title: "goober",
        img_url: "*",
        description: "Powerful stuff.",
        status: "Still at large."
    })

    await Book.create({
        title: "FlipHat",
        img_url: "*",
        description: "Numerous and Petulant.",
        status: "Morbo."
    })

    await Book.create({
        title: "Endwalker",
        img_url: "*",
        description: "It was really good.",
        status: "Well, the world didn't end to there's that."
    })

    console.log("made up a book.");
    mongoose.disconnect();
}

seed();