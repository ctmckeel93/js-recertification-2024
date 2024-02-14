import { Link } from "react-router-dom";

const BookTable = ({books}) => {
    return (
        <table className="table table-dark table-striped table-hover">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Page Count</th>
                    <th>Available</th>
                    <th>Book Page</th>
                </tr>
            </thead>
            <tbody>
                {
                    books && books.map((book) => (
                        <> 
                            <tr>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{book.pages}</td>
                                <td>{book.isAvailable ? "Yes": "No"} | <Link to={"/books/edit/" + book._id}>Edit</Link></td>
                                <td>
                                    <Link className="btn btn-success" to={'/books/' + book._id}>Book Page</Link>
                                </td>
                            </tr>
                        </>
                    ) )
                }
            </tbody>
        </table>
    )
}

export default BookTable;