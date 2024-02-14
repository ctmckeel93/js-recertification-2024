
import axios from 'axios';
import { useEffect, useState } from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import Navbar from '../components/Navbar';

const BookDisplay = ({setBooks}) => {

    const {id} = useParams();
    const [book, setBook] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/books/" + id)
            .then(oneBook => setBook(oneBook.data))
            .catch(err => console.log(err))
    })

    const borrowBook = () => {
        axios.delete("http://localhost:8000/api/books/"+ id)
            .then(() => setBooks(prevBooks => prevBooks.filter(book => book._id !== id)) )
            .catch(err => console.log(err))
        navigate("/");
        
    }

    return (
        <>
            <Navbar label={"Display Page"}/>
            <h1>{book.title}</h1>
            <p>By {book.author}</p>
            <p>{book.pages} pages</p>
            <p>Available?: {book.isAvailable ? "Yes" : "No"}</p>
            <button onClick={borrowBook} className="btn btn-danger">Borrow</button>
        </>
    )
}

export default BookDisplay;