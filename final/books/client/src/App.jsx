import { useEffect, useState } from 'react'
import './App.css'
import BookDisplay from './views/BookDisplay'
import CreateBook from './views/CreateBook'
import Dashboard from './views/Dashboard'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import axios from 'axios'
import UpdateBook from './views/UpdateBook'

function App() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/books")
      .then(bookList => setBooks(bookList.data))
      .catch(err => console.log(err))
  },[]) 


  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Dashboard books={books}/>}/>        
          <Route path="/books" element={<CreateBook setBooks={setBooks}/>}/>
          <Route path="/books/:id" element={<BookDisplay setBooks={setBooks}/>}/>
          <Route path="/books/edit/:id" element={<UpdateBook setBooks={setBooks}/>}/>
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
