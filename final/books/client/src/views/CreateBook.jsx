import { useState } from "react";
import axios from 'axios'
import BookForm from "../components/BookForm";
import Navbar from "../components/Navbar";
import {useNavigate} from 'react-router-dom';

const CreateBook = ({setBooks}) => {

    const navigate = useNavigate();

    const createBook = (data, setErrorData) => {
        
        console.log(data);
    
        axios
            .post("http://localhost:8000/api/books", data)
            .then((response) => {
                setBooks(prev => [...prev, response.data])
                navigate("/")
            } )
            .catch((err) => {
                console.log(err);
                setErrorData(err.response.data.errors)
            });

    }

    
    return (
        <>
            <Navbar label={"Add Book"}/>
            <BookForm submitProp={createBook} setBooks={setBooks}/>
            
        </>
    )
}

export default CreateBook;