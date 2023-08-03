const mongoose = require("mongoose");
const {Schema} = mongoose;
const bookSchema = new Schema({
    name: String,
    img_irl: String,
    description: String,
    Status: String
})

const book = mongosoe.model("Book", bookSchema)

module.exports = Book