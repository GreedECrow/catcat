const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const Book = require("./models/Book");
const bp = require("body-parser");

const app = express();
app.use(cors());
app.use(bp.json());

mongoose.connect(process.env.DATABASE_URL).then(( => console.log ("DB Connected"))



)