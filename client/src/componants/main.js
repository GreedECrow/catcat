import React, {useState, useEffect} from "react";
import axios from 'axios';
import BookCard from './BookCard/BookCard';
import Form from './Form/Form';

export default function Main() {
    const [book, setBook] = useState ([]);

    useEffect(() => {
        getbook()
    },[]);
};

// Read
async function getBook() {
    let API = "http://localhost:8001/book";
    const result = await axios.get(API);
    console.log(result.data);
    setBook(result.data);
};

//Create
const handleAddBook = async newBookFormData => {
    const res = await axios.post("http://localhost:8001/book", newBookFormData);
    setBook([...book, res.data]);
};

// Delete
const handleDelete = async (id) => {
    console.log("clicked");
    const res = await axios.delete(`http://localhost:8001/book/${id}`);
    console.log(res);
    getBook();
};

// Update
const handleUpdateBook = async (book) => {
    await axios.put(`http://localhost:8001/book/${book._id}`, book);
    getBook();
};

// Talk about HTTP Request structure ->
return (
    <div>
        <Form onSubmitFunc={handleAddBook}/>
        <h3>I am THE MAXX!!</h3>
        <BookCard book={book} handleDelete={handleDelete} handleUpdateBook={handlkeUpdateBook}/>
    </div>
);
