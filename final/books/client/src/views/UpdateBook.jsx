import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';
import Navbar from '../components/Navbar';
import BookForm from '../components/BookForm';
import { useEffect, useState } from 'react';

const UpdateBook = ({setBooks}) => {

    const [bookToUpdate, setBookToUpdate] = useState();

    useEffect(() => {
        axios.get("http://localhost:8000/api/books/" + id)
            .then(response => setBookToUpdate(response.data))
            .catch(err => console.log(err))
    }, []) 
    const navigate = useNavigate()
    const {id} = useParams();
    const updateBook = (data, setErrorData) => {
        axios.put("http://localhost:8000/api/books/" + id,data )
          .then(() => {
            setBooks(prevBooks => {
                return prevBooks.map((book) => {
                    if (book._id == id) {
                        book = data
                    }

                    return book;
                })
            })
            navigate("/books/" + id)
          })
          .catch(err => setErrorData(err.err.response.data.errors))
      }

    return (
        <>
            <Navbar label={"Update Book"}/>

            {
                bookToUpdate != null ? <BookForm submitProp={updateBook} updateData={bookToUpdate} setBooks={setBooks}/> : ""

            }
            
        </>
    )

}

export default UpdateBook;