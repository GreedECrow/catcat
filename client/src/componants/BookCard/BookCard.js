import React from "react";
import "./BookCard.css";
import Form from '../Form/Form';

export default function BookCard({book, handleDelete, HandleUpdateBook}) {

    return (
        <div>
            {book.map(book => {
                return (
                    <div key={book._id}>
                        <div>
                            <p onClick={() => handleDelete(book._id)}>X</p>
                            <h3>{book.name}</h3>
                            <img src={book.img_url} />
                            <p>{book.description}, {book.status}</p>
                        </div>
                    <Form onSubmitFunc={handleUpdateBook} book={book}/>
                </div>
                )
            })}
        </div>
    )
}